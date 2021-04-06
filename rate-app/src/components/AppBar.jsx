import React from "react";
import { View, StyleSheet, Pressable, Text, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";
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
  return (
    <View style={styles.container}>
      <Pressable>
        <ScrollView horizontal style={styles.scrollview}>
          <Link to="/">
            <Text style={styles.text}>Repositories</Text>
          </Link>
          <Link to="/signin">
            <Text style={styles.text}>Sign in</Text>
          </Link>
        </ScrollView>
      </Pressable>
    </View>
  );
};

export default AppBar;
