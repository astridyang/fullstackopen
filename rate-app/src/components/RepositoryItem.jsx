import React from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import theme from "../theme";
import RepositoryCount from "./RepositoryCount";
const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    backgroundColor: theme.bgcolors.repository,
    padding: 20,
  },
  flexContainer: {
    flexDirection: "row",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 20,
  },
  emphasis: {
    fontWeight: "600",
  },
  rightContainer: {
    flex: 1,
  },
  wrapTag: {
    marginTop: 10,
  },
  tag: {
    backgroundColor: theme.colors.primary,
    color: "white",
    borderRadius: 5,
    padding: 5,
  },
  description: {
    color: Platform.select({
      android: "green",
      ios: "blue",
      default: "black",
    }),
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Image source={{uri:item.ownerAvatarUrl}} style={styles.avatar} />
        <View style={styles.rightContainer}>
          <Text style={styles.emphasis}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.wrapTag}>
            <Text style={styles.tag}>{item.language}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.flexContainer}>
        <RepositoryCount count={item.stargazersCount} text="Stars" />
        <RepositoryCount count={item.forksCount} text="Forks" />
        <RepositoryCount count={item.reviewCount} text="Reviews" />
        <RepositoryCount count={item.ratingAverage} text="Ratings" />
      </View>
    </View>
  );
};

export default RepositoryItem;
