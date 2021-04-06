import React from "react";

import { View, Pressable, StyleSheet, Button } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import * as yup from "yup";
const initialValues = {
  username: "",
  password: "",
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 10,
  },
});
const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required."),
  password: yup.string().required("Password is required"),
});
const SignInForm = ({ onSubmit }) => {
  let secureTextEntry = true;
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={secureTextEntry}
      />
      <Button title="Sign in" onPress={onSubmit} />
      {/* <Pressable onPress={onSubmit}>
          
          <Text style={styles.submit}>Sign in</Text>
        </Pressable> */}
    </View>
  );
};
const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};
export default SignIn;