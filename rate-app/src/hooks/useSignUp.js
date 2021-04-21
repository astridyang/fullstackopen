import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { CreateUser } from "../graphql/queries";
import { useHistory } from "react-router-dom";
const useSignUp = () => {
  const [mutate, result] = useMutation(CreateUser);
  let history = useHistory();
  const SignUp = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });
  };
  useEffect(() => {
    if (result.data) {
      console.log("result: ", result.data);
      history.push("/signin");
    }
  }, [result.data]);
  return [SignUp, result];
};
export default useSignUp;
