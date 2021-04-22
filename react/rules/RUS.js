import { isPastDate } from '../utils/dateRules'
import msk from 'msk'

export default {
  country: 'RUS',
  personalFields: [
    {
      name: 'firstName',
      maxLength: 100,
      label: 'firstName',
      required: true,
    },
    {
      name: 'lastName',
      maxLength: 100,
      label: 'lastName',
      required: true,
    },
    {
      name: 'email',
      maxLength: 100,
      label: 'email',
      hidden: true,
    },
    {
      name: 'document',
      maxLength: 50,
      label: 'document',
      required: false,
      hidden: true,
    },
    {
      name: 'homePhone',
      maxLength: 30,
      label: 'homePhone',
    },
    {
      name: 'gender',
      maxLength: 30,
      label: 'gender',
    },
    {
      name: 'birthDate',
      maxLength: 30,
      label: 'birthDate',
      type: 'date',
      validate: isPastDate,
      mask: (value) => msk.fit(value, '99.99.9999'),
    },
  ],
  businessFields: [
    {
      name: 'corporateName',
      maxLength: 100,
      label: 'corporateName',
    },
    {
      name: 'tradeName',
      maxLength: 100,
      label: 'tradeName',
    },
    {
      name: 'corporateDocument',
      maxLength: 30,
      label: 'corporateDocument',
    },
    {
      name: 'businessPhone',
      maxLength: 30,
      label: 'businessPhone',
    },
  ],
}
