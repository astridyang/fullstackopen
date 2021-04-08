import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { SignIn } from "../graphql/queries";
import useAuthStorage from '../hooks/useAuthStorage';
import { useHistory } from "react-router-dom";
import { useApolloClient } from '@apollo/client';
const useSignIn = () => {
  const [mutate, result] = useMutation(SignIn);
  const authStorage = useAuthStorage();
  let history = useHistory();
  const apolloClient = useApolloClient();
  const signIn = async ({ username, password }) => {
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
    const setToken = async (token)=>{
      await authStorage.setAccessToken(token);
    };
    if (result.data) {
      console.log("result: ", result.data);
      setToken(result.data.authorize.accessToken);
      apolloClient.resetStore();
      history.push("/");
    }
  }, [result.data]);
  return [signIn, result];
};
export default useSignIn;
