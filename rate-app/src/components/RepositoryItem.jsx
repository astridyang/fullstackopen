import React from "react";
import { View, Text, StyleSheet, Image, Platform, Button } from "react-native";
import theme from "../theme";
import RepositoryCount from "./RepositoryCount";
import * as WebBrowser from "expo-web-browser";
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
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
  mt10: {
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
  button: {
    marginTop: 10,
  },
});

const RepositoryItem = ({ item, showBtn }) => {
  const handleOpenWithWebBrowser = (url) => {
    // console.log("open url", url)
    WebBrowser.openBrowserAsync(url);
  };
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.rightContainer}>
          <Text style={styles.emphasis} testID="fullName">
            {item.fullName}
          </Text>
          <Text style={styles.description} testID="description">
            {item.description}
          </Text>
          <Text style={styles.mt10}>
            <Text style={styles.tag} testID="language">
              {item.language}
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.flexContainer}>
        <RepositoryCount count={item.stargazersCount} text="Stars" />
        <RepositoryCount count={item.forksCount} text="Forks" />
        <RepositoryCount count={item.reviewCount} text="Reviews" />
        <RepositoryCount count={item.ratingAverage} text="Ratings" />
      </View>
      {showBtn ? (
        <View style={styles.button}>
          <Button
            title="Open in Github"
            onPress={() => handleOpenWithWebBrowser(item.url)}
          />
        </View>
      ) : null}
    </View>
  );
};

export default RepositoryItem;
