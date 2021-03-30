import patientsData from '../../data/patients'
import { patientsEntry, NonSensitivePatientEntry, NewEntry, newPatientEntry } from '../types'
import {v4 as uuid} from 'uuid'
const getEntries = (): patientsEntry[] => {
    return patientsData;
}
const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
    return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id, name, dateOfBirth, gender, occupation
    }))
}
const addEntry = (entry: newPatientEntry): patientsEntry => {
    const newPatient = {
        id: uuid(),
        entries: [],
        ...entry
    }
    patientsData.push(newPatient);
    return newPatient;
}
const addPatientEntry = (pid: string, newData: NewEntry): patientsEntry => {
    const newEntry = {
        id: uuid(),
        ...newData
    }
    const patient = patientsData.find(p => p.id === pid);
    if (!patient) throw new Error(`patient with id ${pid} not found`);
    patient.entries.push(newEntry);
    return patient;
}
export default {
    getEntries,
    addEntry,
    getNonSensitiveEntries,
    addPatientEntry,
}