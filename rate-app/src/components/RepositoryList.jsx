import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { GET_REPOSITORIES } from "../graphql/queries";
import { useQuery } from "@apollo/client";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES,{
    fetchPolicy: 'cache-and-network',
  });
  if(loading){
    return <div>loading...</div>;
  }
  // Get the nodes from the edges array
  const repositoryNodes = data.repositories
    ? data.repositories.edges.map((edge) => edge.node)
    : [];
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      // Other props
    />
  );
};

export default RepositoryList;
