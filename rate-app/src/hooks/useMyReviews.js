import { useQuery } from "@apollo/client";
import { GET_AUTH_USER } from "../graphql/queries";
const useMyReviews = (variables) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_AUTH_USER, {
    fetchPolicy: "cache-and-network",
    variables,
  });
  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.authorizedUser.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }
    fetchMore({
      variables: {
        after: data.authorizedUser.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };
  // console.log("useMyReviews data: ", data);
  return {
    reviews: data?.authorizedUser?.reviews,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useMyReviews;
