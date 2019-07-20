import {EMAIL_REGEX, PHONE_REGEX} from 'shared/const'

export const email = s => EMAIL_REGEX.test(s)
export const phone = s => PHONE_REGEX.test('+260' + s.slice(4))