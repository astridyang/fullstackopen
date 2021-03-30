import { Gender, newPatientEntry } from './types'
const isString = (text: any): text is string => {
    return typeof text === 'string';
}
const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
}
const isDate = (param: any): boolean => {
    return Boolean(Date.parse(param));
}
const parseDate = (date: any): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing dateOfBirth: ' + date);
    }
    return date;
}
const parseGender = (gender: any): Gender => {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender)
    }
    return gender
}
const parseString = (param: any, name: string): string => {
    if (!param || !isString(param)) {
        throw new Error(`Incorrect or missing ${name}: ${param}`)
    }
    return param;
}

const toNewPatientEntry = (object: any): newPatientEntry => {
    return {
        name: parseString(object.name, 'name'),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseString(object.ssn, 'ssn'),
        gender: parseGender(object.gender),
        occupation: parseString(object.occupation, 'occupation')
    }
}
export default toNewPatientEntry