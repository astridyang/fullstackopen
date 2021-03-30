import { State } from "./state";
import { Patient, Diagnosis } from "../types";

export type Action =
  | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    }
  | {
      type: "SET_PATIENT_DETAILS";
      payload: Patient | null;
    }
  | {
      type: "SET_DIAGNOSIS";
      payload: Diagnosis[];
    }
  | {
      type: "ADD_ENTRY";
      payload: Patient;
    };
export const setPatientList = (data: Patient[]): Action => ({
  type: "SET_PATIENT_LIST",
  payload: data,
});
export const setPatientDetails = (data: Patient): Action => ({
  type: "SET_PATIENT_DETAILS",
  payload: data,
});
export const setDiagnosis = (data: Diagnosis[]): Action => ({
  type: "SET_DIAGNOSIS",
  payload: data,
});
export const addEntry = (data: Patient): Action => ({
  type: "ADD_ENTRY",
  payload: data,
});
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients,
        },
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload,
        },
      };
    case "SET_PATIENT_DETAILS":
      return {
        ...state,
        patient: action.payload,
      };
    case "SET_DIAGNOSIS":
      return {
        ...state,
        diagnosis: action.payload,
      };
    case "ADD_ENTRY":
      return {
        ...state,
        patient: action.payload,
      };
    default:
      return state;
  }
};
