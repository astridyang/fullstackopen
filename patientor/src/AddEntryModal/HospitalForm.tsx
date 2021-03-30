import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { Field, Formik, Form } from "formik";
import { TextField,  DiagnosisSelection } from "../AddPatientModal/FormField";
import { Diagnosis, NewEntry } from "../types";
import * as Yup from 'yup';
interface Props {
  onSubmit: (values: NewEntry) => void;
  onCancel: () => void;
  diagnosis: Diagnosis[];
}

const HospitalForm = ({ onSubmit, onCancel, diagnosis }: Props) => {

  return (
    <Formik
      initialValues={{
        type:"Hospital",
        description: "",
        date: "",
        specialist: "",
        discharge: {
            date: "",
            criteria: "",
        },
      }}
      onSubmit={onSubmit}
      validationSchema={
        Yup.object().shape({
          date: Yup.date().required('Field is required'),
          specialist: Yup.string().required('Field is required'),
          description: Yup.string().required('Field is required'),
          discharge: Yup.object().shape({
            date: Yup.date().required('Field is required'),
            criteria: Yup.string().required('Field is required')
          })
        })
      }
    >
      {({ isValid, dirty, setFieldValue, setFieldTouched,touched, errors }) => {
        return (
          <Form className="form ui">
              <Field label="Entry type" component={TextField} name="type" />
            <Field
              label="Description"
              placeholder="description"
              name="description"
              component={TextField}
            />
            <Field
              label="Date"
              placeholder="date"
              name="date"
              component={TextField}
            />
            <Field
              label="Specialist"
              placeholder="specialist"
              name="specialist"
              component={TextField}
            />
            <Field
              label="Discharge date"
              component={TextField}
              name="discharge.date"
              placeholder="YYYY-MM-DD"
              errors={errors}
              touched={touched}
            />
            <Field
              label="Discharge criteria"
              component={TextField}
              name="discharge.criteria"
              placeholder="Discharge Criteria"
              errors={errors}
              touched={touched}
            />
          
            <DiagnosisSelection
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
              diagnoses={Object.values(diagnosis)}
            />
            <Grid>
              <Grid.Column floated="left" width={5}>
                <Button type="button" onClick={onCancel} color="red">
                  Cancel
                </Button>
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <Button
                  type="submit"
                  floated="right"
                  color="green"
                  disabled={!dirty || !isValid}
                >
                  Add
                </Button>
              </Grid.Column>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};
export default HospitalForm;
