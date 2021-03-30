export interface diagnosesEntry {
  code: string;
  name: string;
  latin?: string;
}
export interface patientsEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}
export type NonSensitivePatientEntry = Omit<patientsEntry, "ssn">;

export type newPatientEntry = Omit<patientsEntry, "id">;

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
  entries: Entry[];
}

export type PublicPatient = Omit<Patient, "ssn" | "entries">;
export enum Gender {
  "Female" = "female",
  "Male" = "male",
  "Other" = "other",
}
export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}
interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnosis["code"]>;
}
export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3,
}
export interface Discharge {
  date: string;
  criteria: string;
}
export interface SickLeave {
  startDate: string;
  endDate: string;
}
interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

interface HospitalEntry extends BaseEntry {
  type: "Hospital";
  discharge: Discharge;
}
interface OccupationalHealthcareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave?: SickLeave;
}
export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;

export type NewHospitalEntry = Omit<HospitalEntry, "id">;
export type NewOccupationalHealthCareEntry = Omit<OccupationalHealthcareEntry, "id">;
export type NewHealthCheckEntry = Omit<HealthCheckEntry, "id">;

export type NewEntry =
  | NewHospitalEntry
  | NewOccupationalHealthCareEntry
  | NewHealthCheckEntry;