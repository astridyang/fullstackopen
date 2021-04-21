import React, { useEffect } from "react";
import { FlatList, Text, StyleSheet, View, Button, Alert } from "react-native";
import useMyReviews from "../hooks/useMyReviews";
import useDeleteReview from "../hooks/useDeleteReview";
import theme from "../theme";
import { format } from "date-fns";
import * as WebBrowser from "expo-web-browser";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  wrap: {
    backgroundColor: "white",
    padding: 10,
  },
  flexContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  rating: {
    width: 40,
    height: 40,
    color: theme.colors.primary,
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: theme.colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  username: {
    fontWeight: "600",
    marginBottom: 3,
  },
  time: {
    color: "#666666",
    marginBottom: 5,
  },
  wrapButton: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
const ItemSeparator = () => <View style={styles.separator} />;
const ReviewDetail = ({ item }) => {
  const [delReview, result] = useDeleteReview();
  const handleOpenWithWebBrowser = (url) => {
    // console.log("open url", url)
    WebBrowser.openBrowserAsync(url);
  };
 
  const onDel = async (id) => {
    try {
      await delReview(id);
      Alert.alert("Delete success.");
    //   refetch();
    } catch (e) {
      console.log(e);
      Alert.alert(`${e.message}`);
    }
  };
  const deleteReview = (id) => {
    console.log("delete id: ", id);
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed");
            onDel(id);
          },
        },
      ]
    );
  };
  return (
    <View style={styles.wrap}>
      <View style={styles.flexContainer}>
        <View style={styles.rating}>
          <Text>{item.rating}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.username}>
            {item.repository.ownerName}/{item.repository.name}
          </Text>
          <Text style={styles.time}>
            {format(new Date(item.createdAt), "MM.dd.yyyy")}
          </Text>
          <Text>{item.text}</Text>
        </View>
      </View>
      <View style={styles.wrapButton}>
        <Button
          title="View repository"
          onPress={() => handleOpenWithWebBrowser(item.repository.url)}
        />
        <Button title="Delete review" onPress={() => deleteReview(item.id)} />
      </View>
    </View>
  );
};
const MyReviews = () => {
  const { reviews, fetchMore, loading } = useMyReviews({
    includeReviews: true,
  });
  if (loading) {
    return <Text>loading...</Text>;
  }
//   console.log("MyReviews: ", reviews, loading);
  const data = reviews?.edges.map((edge) => edge.node);

  const onEndReach = () => {
    console.log("review: You have reached the end of the list");
    fetchMore();
  };
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ReviewDetail item={item} />}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={({ id }) => id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.01}
    />
  );
};

export default MyReviews;
