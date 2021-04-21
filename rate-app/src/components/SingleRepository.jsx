import React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
import ReviewDetail from "./ReviewDetail";
import { useRouteMatch } from "react-router-dom";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
const RepositoryInfo = ({ repository }) => {
  // Repository's information implemented in the previous exercise
  return <RepositoryItem item={repository} showBtn={true} />;
};

const ReviewItem = ({ review }) => {
  // Single review item
  return <ReviewDetail item={review} />;
};

const SingleRepository = () => {
  const match = useRouteMatch("/repository/:id");
  let id = match ? match.params.id : null;
  const { repository, fetchMore, loading } = useRepository({
    id: id,
    first: 4,
  });
  if (loading) {
    return <Text>loading...</Text>;
  }
  // const repository = data.repository;
  // console.log('repository: ',repository);
  const reviews = repository?.reviews.edges.map((edge) => edge.node);
  // console.log(reviews);
  const onEndReach = () => {
    console.log("review: You have reached the end of the list");
    fetchMore();
  };
  return (
    <FlatList
      data={reviews}
      // ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.01}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      // ...
    />
  );
};

export default SingleRepository;
