import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";
import { format } from 'date-fns'
const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding:10,
    marginBottom:10,
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
    marginRight:10,
  },
  content:{
    flex:1,
  },
  username:{
    fontWeight: '600',
    marginBottom:3,
  },
  time:{
    color: '#666666',
    marginBottom:5,
  }
});
const ReviewDetail = ({ item }) => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.rating}>
        <Text>{item.rating}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.username}>{item.user.username}</Text>
        <Text style={styles.time}>{format(new Date(item.createdAt), 'MM.dd.yyyy')}</Text>
        <Text>{item.text}</Text>
      </View>
    </View>
  );
};

export default ReviewDetail;
