import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { CreateReview } from "../graphql/queries";
import { useHistory } from "react-router-dom";
const useCreateReview = () => {
  const [mutate, result] = useMutation(CreateReview);
  let history = useHistory();
  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    // call the mutate function here with the right arguments
    await mutate({
      variables: {
        review: {
          ownerName,
          repositoryName,
          rating,
          text,
        },
      },
    });
  };
  useEffect(() => {
    if (result.data) {
      console.log("result: ", result.data);
      const id = result.data.createReview.repository.id;
      console.log('review repo id: ', id);
      history.push(`/repository/${id}`);
    }
  }, [result.data]);
  return [createReview, result];
};
export default useCreateReview;
