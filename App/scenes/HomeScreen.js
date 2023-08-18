import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={["rgba(0, 198, 251, 0.2)", "rgba(0, 198, 251, 0)"]}
      style={styles.container}
    >
      <Text>Welcome</Text>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9F56D4",
  },
});
