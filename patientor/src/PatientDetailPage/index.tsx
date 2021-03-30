import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useStateValue, setPatientDetails } from "../state";
import { apiBaseUrl } from "../constants";
import { Container, Loader, List, Icon, Button } from "semantic-ui-react";
import { Patient, NewEntry } from "../types";
import EntryDetail from "./EntryDetails";
import AddEntryForm from "../AddEntryModal";
const PatientDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [{ patient }, dispatch] = useStateValue();
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | undefined>();


  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

  const submitNewEntry = async (values: NewEntry) => {
    try {
      const { data: newPatient } = await axios.post<Patient>(
        `${apiBaseUrl}/patients/${id}/entries`,
        values
      );
      dispatch({ type: "ADD_ENTRY", payload: newPatient });
      closeModal();
    } catch (e) {
      console.error(e.response?.data || 'Unknown Error');
      setError(e.response?.data?.error || 'Unknown error');
    }
  };
  useEffect(() => {
    const fetchPatientDetail = async () => {
      try {
        const { data: patientDetailsFromApi } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        dispatch(setPatientDetails(patientDetailsFromApi));
      } catch (e) {
        console.error(e.response.data);
      }
    };
    void fetchPatientDetail();
    // return () => {
    //     dispatch({ type: "SET_PATIENT_DETAILS", payload: null });
    // };
  }, [dispatch, id]);
  if (!patient) {
    return <Loader active inline="centered" />;
  }
  const male = patient.gender === "male";
  return (
    <Container>
      <h2>
        {patient.name} <Icon name={male ? "mars stroke" : "venus"} />
      </h2>
      <List size="large">
        <List.Item>{patient.ssn && `SSN: ${patient.ssn}`}</List.Item>
        <List.Item>{`Occupation: ${patient.occupation}`}</List.Item>
      </List>
      <h3>entries</h3>
      <AddEntryForm
        modalOpen={modalOpen}
        onSubmit={submitNewEntry}
        error={error}
        onClose={closeModal}
      />
      <Button onClick={()=>setModalOpen(true)}>Add new entry</Button>
      <List size="large">
        {patient.entries.map((e) => (
          <EntryDetail key={e.id} entry={e} />
        ))}
      </List>
    </Container>
  );
};

export default PatientDetail;
