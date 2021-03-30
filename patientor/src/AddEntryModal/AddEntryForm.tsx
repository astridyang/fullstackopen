import React, { useState } from "react";
import {  Divider } from "semantic-ui-react";
import { useStateValue } from "../state";
import HealthCheckForm from  "./HealthCheckForm";
import HospitalForm from  "./HospitalForm";
import OccupationalHealthCareForm from  "./OccupationalHealthCareForm";
import {
  TypeSelectField,
  EntryTypeOption,
} from "../AddPatientModal/FormField";
import { NewEntry } from "../types";

interface Props {
  onSubmit: (values: NewEntry) => void;
  onCancel: () => void;
}

const typeOptions: EntryTypeOption[] = [
  { value: "HealthCheck", label: "HealthCheck" },
  { value: "Hospital", label: "Hospital" },
  { value: "OccupationalHealthcare", label: "OccupationalHealthcare" },
];
const AddEntryForm = ({ onSubmit, onCancel }: Props) => {
  // eslint-disable-next-line 
  const [formType, setFormType] = useState<any>("");
  const [{ diagnosis }] = useStateValue();

  return (
    <div>
      <TypeSelectField
        label="Entry Type"
        options={typeOptions}
        onChange={(e, { value }) => setFormType(value)}
      />
      <Divider hidden />
      {
        formType === 'HealthCheck' && (
          <HealthCheckForm 
            onCancel={onCancel}
            onSubmit={onSubmit}
            diagnosis={diagnosis}
          />
        )
      }
      {
        formType === 'Hospital' && (
          <HospitalForm 
            onCancel={onCancel}
            onSubmit={onSubmit}
            diagnosis={diagnosis}
          />
        )
      }
      {
        formType === 'OccupationalHealthcare' && (
          <OccupationalHealthCareForm 
            onCancel={onCancel}
            onSubmit={onSubmit}
            diagnosis={diagnosis}
          />
        )
      }
    </div>
  );
};
export default AddEntryForm;
