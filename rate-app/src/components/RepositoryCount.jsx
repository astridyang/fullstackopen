import React from "react";
import { View, Text, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  count: {
    flexGrow: 1,
    display:'flex',
    alignItems:'center',
    marginTop: 20,
  },
  emphasis:{
      fontWeight: '600',
  }
});
const formatNumber = (number) => {
  return number >= 1000 ? (number / 1000).toFixed(1) + "k" : number;
};
const RepositoryCount = ({ count, text }) => {
  return (
    <View style={styles.count}>
      <Text style={styles.emphasis}>{formatNumber(count)}</Text>
      <Text>{text}</Text>
    </View>
  );
};

export default RepositoryCount;
