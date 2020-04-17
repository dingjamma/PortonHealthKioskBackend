import { IUser, User } from '../model'
import { MongooseFilterQuery } from 'mongoose'
import * as crypto from 'crypto'
import DataService from './DataService'

export default class UserService extends DataService {
  public async findUsers (conditions: MongooseFilterQuery<Pick<IUser, '_id' | 'username' | 'password' | 'roles'>>) {
    return User.find(conditions)
  }

  public async createUser (doc: IUser) {
    if (doc.password) {
      doc.password = this.getPasswordHash(doc.password)
    }
    if (await User.findOne({ username: doc.username })) {
      throw new ReferenceError('User already exists')
    }
    const user = new User(doc)
    return user.save()
  }

  public async updateUser (conditions: MongooseFilterQuery<Pick<IUser, '_id' | 'username' | 'password' | 'roles'>>, doc: IUser) {
    if (doc.password) {
      doc.password = this.getPasswordHash(doc.password)
    }
    if (doc.username && await User.findOne({ username: doc.username })) {
      throw new ReferenceError('User already exists')
    }
    return User.update(conditions, doc).exec()
  }

  public async logIn (user: IUser) {
    if (!user?.username || !user?.password) {
      throw new ReferenceError('Username and password must be provided')
    }
    user.password = this.getPasswordHash(user.password)
    const result = await User.findOne(user)
    if (!result) {
      throw new ReferenceError('The user information does not match any in the database')
    } else {
      if (!this.ctx.session) {
        this.ctx.session = {}
      }
      this.ctx.session.user = result
      return result._id
    }
  }

  public getPasswordHash (password: string): string {
    return crypto.createHash('sha256').update(password + this.config.salt).digest('hex')
  }
}