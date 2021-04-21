import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
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
export const SignInForm = ({ onSubmit }) => {
  let secureTextEntry = true;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput
            name="username"
            placeholder="Username"
          />
          <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry={secureTextEntry}
          />
          <Button
            title="Sign in"
            onPress={handleSubmit}
            testID="submitButton"
          />
        </View>
      )}
    </Formik>
  );
};
const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      // todo
      await signIn({ username, password });
      // console.log(data);
      // const res = await signIn({ username, password });
      // console.log('sing in: ', res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignInForm
      onSubmit={onSubmit}
    />
  );
};
export default SignIn;
