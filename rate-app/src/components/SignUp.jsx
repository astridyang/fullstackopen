import React, { useState } from "react";
import { View, StyleSheet, Button,Text } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import * as yup from "yup";
import useCreateUser from "../hooks/useCreateUser";
const initialValues = {
  username: "",
  password: "",
  passwordConfirm: "",
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 10,
  },
  errorBox: {
    marginBottom: 10,
  },
  errorText: {
    color: "#d73a4a",
  },
});
const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required."),
  password: yup.string().required("Password is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required("Password confirm is required"),
});
export const SignUpForm = ({ onSubmit, errMsg }) => {
  let secureTextEntry = true;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          {errMsg ? (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}>{errMsg}</Text>
            </View>
          ) : null}
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry={secureTextEntry}
          />
          <FormikTextInput
            name="passwordConfirm"
            placeholder="Password confirmation"
            secureTextEntry={secureTextEntry}
          />
          <Button
            title="Sign up"
            onPress={handleSubmit}
            testID="submitButton"
          />
        </View>
      )}
    </Formik>
  );
};
const SignUp = () => {
  const [signUp] = useCreateUser();
  const [errMsg, setErrMsg] = useState("");
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      // todo
      await signUp({ username, password });
      // console.log(data);
      // const res = await signUp({ username, password });
      // console.log('sing in: ', res);
    } catch (e) {
      console.log(e);
      setErrMsg(e.message);
      setTimeout(() => {
        setErrMsg("");
      }, 2000);
    }
  };

  return <SignUpForm onSubmit={onSubmit} errMsg={errMsg} />;
};
export default SignUp;
