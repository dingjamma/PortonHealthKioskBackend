import { COLLINGWOOD, SUNRISE, MIYAGI } from './users'
import { InputType } from '../model/checkinformfield'
// import {isEnabled } from '../model/clinic'

export const clinics = [
  {
    name: 'Collingwood Medical Clinic',
    phone: '(604) 435-3388',
    address: {
      street: '3150 E 54th Avenue',
      city: 'Vancouver',
      province: 'BC',
      country: 'Canada',
      postcode: 'V5S 1Z1'
    },
    ownerId: COLLINGWOOD, // replaced with clinic admin's db id by seeder
    formFields: [
      {
        inputType: InputType.LAST_NAME,
        name: 'familyName',
        label: 'Last Name'
      },
      {
        inputType: InputType.BIRTHDAY,
        name: 'birthday',
        label: 'Date of Birth'
      }
    ],
    isEnabled:{
      disabled:false
    }
  },
  {
    name: 'Sunrise Medical Clinic',
    phone: '(604) 253-3166',
    address: {
      street: '2280 E Hastings Street',
      city: 'Vancouver',
      province: 'BC',
      country: 'Canada',
      postcode: 'V5L 1V4'
    },
    ownerId: SUNRISE,
    formFields: [
      {
        inputType: InputType.LAST_NAME,
        name: 'familyName',
        label: 'Last Name'
      },
      {
        inputType: InputType.BIRTHDAY,
        name: 'birthday',
        label: 'Date of Birth'
      }
    ],
    isEnabled:{
      disabled:false,
    }
  },
  {
    name: "Mr.Miyagi's Reiki",
    phone: '(604) 555-3786',
    address: {
      street: '666 Doesntwork Avenue',
      city: 'Port Moody',
      province: 'BC',
      country: 'Canada',
      postcode: 'V8B 2IC'
    },
    ownerId: MIYAGI,
    formFields: [
      {
        inputType: InputType.LAST_NAME,
        name: 'familyName',
        label: 'Last Name'
      },
      {
        inputType: InputType.BIRTHDAY,
        name: 'birthday',
        label: 'Date of Birth'
      }
    ],
    isEnabled:{
      disabled:false,
    }
  }
]
