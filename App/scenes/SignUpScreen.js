import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={24}
        color="#background: #000A4A;
"
      />
      <Text>SignUpScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
