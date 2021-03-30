import React from 'react';
import { Entry } from '../types';
import HEntry from './HospitalEntry';
import HCEntry from './HealthCheckEntry';
import OHEntry from './OccupationHealthcare';
import axios from 'axios';
import { apiBaseUrl } from '../constants';
import { setDiagnosis, useStateValue } from '../state';
import { Diagnosis } from '../types';
export const assertNever = (value: never): never => {
    throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
};

const EntryDetail: React.FC<{ entry: Entry }> = ({ entry }) => {
    const [{ diagnosis }, dispatch] = useStateValue();
    React.useEffect(() => {
      const fetchDiagnosisList = async () => {
        try {
          const { data: diagnosisFromApi } = await axios.get<Diagnosis[]>(
            `${apiBaseUrl}/diagnoses`
          );
          dispatch(setDiagnosis(diagnosisFromApi));
        } catch (e) {
          console.error(e);
        }
      };
      void fetchDiagnosisList();
    }, [dispatch]);
    switch (entry.type) {
        case "HealthCheck":
            return <HCEntry entry={entry} diagnosis={diagnosis} />;
        case "Hospital":
            return <HEntry entry={entry} diagnosis={diagnosis} />;
        case "OccupationalHealthcare":
            return <OHEntry entry={entry} diagnosis={diagnosis} />;
        default:
            return assertNever(entry);
    }
};

export default EntryDetail;