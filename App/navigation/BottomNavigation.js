import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Ionicons, Entypo, Foundation } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";


const BottomNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const isActiveScreen = (screenName) => {
    return route.name === screenName;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigateToScreen("Landing")}
        style={[
          styles.iconContainer,
          isActiveScreen("HomeScreen") ? styles.activeIconContainer : null,
        ]}
      >
        <Foundation name="home" size={24} color="black" />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigateToScreen("Wallet")}
        style={[
          styles.iconContainer,
          isActiveScreen("WalletScreen") ? styles.activeIconContainer : null,
        ]}
      >
        <Ionicons name="ios-grid" size={24} color="gray" />
        <Text style={styles.text}>Transactions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Profile")}
        style={[
          styles.iconContainer,
          isActiveScreen("ProfileScreen") ? styles.activeIconContainer : null,
        ]}
      >
        <Ionicons name="ios-person-sharp" size={24} color="gray" />

        <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 25,
    height: 100,
    borderColor: "#ccc",
    backgroundColor: "transparent",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  activeIconContainer: {
    backgroundColor: "blue",
  },
  text: {
    fontSize: 10,
    paddingVertical: 5,
    color: "#000",
  },
});

export default BottomNavigation;
