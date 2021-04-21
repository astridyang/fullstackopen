import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import useCreateReview from "../hooks/useCreateReview";
import * as yup from "yup";
const styles = StyleSheet.create({
  flexContainer: {
    backgroundColor: "white",
    padding: 10,
  },
  errorBox: {
    marginBottom: 10,
  },
  errorText: {
    color: "#d73a4a",
  },
});
const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};
const validationSchema = yup.object().shape({
  ownerName: yup.string().trim().required("Repository owner name is required."),
  repositoryName: yup.string().trim().required("Repository name is required"),
  rating: yup.number().min(0).max(100).required("Rating is required"),
});
export const Form = ({ onSubmit, errMsg }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.flexContainer}>
          {errMsg ? (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}>{errMsg}</Text>
            </View>
          ) : null}
          <FormikTextInput
            name="ownerName"
            placeholder="Repository owner name"
          />
          <FormikTextInput
            name="repositoryName"
            placeholder="Repository name"
          />
          <FormikTextInput
            name="rating"
            placeholder="Rating between 0 and 100"
          />
          <FormikTextInput name="text" placeholder="Review" multiline />
          <Button title="Create" onPress={handleSubmit} testID="submitButton" />
        </View>
      )}
    </Formik>
  );
};
const ReviewForm = () => {
  const [createReview, result] = useCreateReview();
  const [errMsg, setErrMsg] = useState("");
  const onSubmit = async (values) => {
    let { ownerName, repositoryName, rating, text } = values;
    rating = parseInt(rating);
    try {
      console.log(ownerName, repositoryName, rating, text);
      const res = await createReview({
        ownerName,
        repositoryName,
        rating,
        text,
      });
      console.log("review res: ", res);
      console.log("review result: ", result);
    } catch (e) {
      console.log(e.message);
      setErrMsg(e.message);
      setTimeout(() => {
        setErrMsg("");
      }, 2000);
    }
  };
  return <Form onSubmit={onSubmit} errMsg={errMsg} />;
};

export default ReviewForm;
