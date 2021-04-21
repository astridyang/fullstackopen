import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { DeleteReview } from "../graphql/queries";
import { GET_AUTH_USER } from "../graphql/queries";
const useDeleteReview = () => {
  const [mutate, result] = useMutation(DeleteReview, {
    refetchQueries: [
      { query: GET_AUTH_USER, variables: { includeReviews: true } },
    ],
  });
  const delReview = async (id) => {
    // call the mutate function here with the right arguments
    await mutate({
      variables: {
        id,
      },
    });
    // useEffect(() => {
    //   if (result.data) {
    //     Alert.alert("Delete success.");
    //     refetch();
    //   }
    // }, [result.data]);
  };
  return [delReview, result];
};

export default useDeleteReview;
