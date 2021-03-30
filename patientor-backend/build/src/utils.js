"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const isString = (text) => {
    return typeof text === 'string';
};
const isGender = (param) => {
    return Object.values(types_1.Gender).includes(param);
};
const isDate = (param) => {
    return Boolean(Date.parse(param));
};
const parseDate = (date) => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing dateOfBirth: ' + date);
    }
    return date;
};
const parseGender = (gender) => {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};
const parseString = (param, name) => {
    if (!param || !isString(param)) {
        throw new Error(`Incorrect or missing ${name}: ${param}`);
    }
    return param;
};
const toNewPatientEntry = (object) => {
    return {
        name: parseString(object.name, 'name'),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseString(object.ssn, 'ssn'),
        gender: parseGender(object.gender),
        occupation: parseString(object.occupation, 'occupation')
    };
};
exports.default = toNewPatientEntry;
