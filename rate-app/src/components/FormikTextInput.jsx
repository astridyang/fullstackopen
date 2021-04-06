import React from "react";
import { StyleSheet } from "react-native";
import { useField } from "formik";
import TextInput from "./TextInput";
import Text from "./Text";
const baseInput = {
  height: 40,
  borderRadius: 5,
  marginBottom: 10,
  borderWidth: 1,
  borderStyle: "solid",
  padding: 10,
  display: "flex",
  width: "100%",
};
const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: "#d73a4a",
    marginBottom:10,
    display:'flex',
  },
  input: {
    borderColor: "#bcbcbc",
    ...baseInput,
  },
  inputError: {
    borderColor: "#d73a4a",
    ...baseInput,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={showError ? styles.inputError : styles.input}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
