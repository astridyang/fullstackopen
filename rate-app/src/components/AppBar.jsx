import React from "react";
import { View, StyleSheet, Pressable, Text, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";
import { useQuery, useApolloClient } from "@apollo/client";
import { GET_AUTH_USER } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.bgcolors.appBar,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.colors.appBar,
    padding: 10,
  },
  scrollview: {
    flexDirection: "row",
  },
});

const AppBar = () => {
  const client = useApolloClient();
  const authStorage = useAuthStorage();
  const { data, error, loading } = useQuery(GET_AUTH_USER);
  // if (loading) {
  //   return <Text>loading...</Text>;
  // }
  const user = data?.authorizedUser ? data.authorizedUser : null;
  // console.log("user: ", user);
  const logout = async () => {
    await authStorage.removeAccessToken();
    client.resetStore();
  };
  return (
    <View style={styles.container}>
      <Pressable>
        <ScrollView horizontal style={styles.scrollview}>
          <Link to="/">
            <Text style={styles.text}>Repositories</Text>
          </Link>
          {user ? (
            <View style={styles.scrollview}>
              <Link to="/createReview">
                <Text style={styles.text}>Create a review</Text>
              </Link>
              <Link to="/myReviews">
                <Text style={styles.text}>My reviews</Text>
              </Link>
              <Pressable onPress={logout}>
                <Text style={styles.text}>Logout</Text>
              </Pressable>
            </View>
          ) : (
            <View style={styles.scrollview}>
              <Link to="/signin">
                <Text style={styles.text}>Sign in</Text>
              </Link>
              <Link to="/signup">
                <Text style={styles.text}>Sign up</Text>
              </Link>
            </View>
          )}
        </ScrollView>
      </Pressable>
    </View>
  );
};

export default AppBar;
