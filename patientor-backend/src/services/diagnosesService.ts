import diagnosesData from '../../data/diagnoses.json'
import { diagnosesEntry } from '../types'
// const diagnoses: Array<diagnosesEntry> = diagnosesData
const getEntries = (): diagnosesEntry[] => {
    return diagnosesData
}
const addEntry = () => {
    return null
}
export default {
    getEntries,
    addEntry
}