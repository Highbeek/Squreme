import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Ionicons, Foundation } from "@expo/vector-icons";
import {
  useNavigation,
  useRoute,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

const BottomNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const focusedRoute = getFocusedRouteNameFromRoute(route);

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const isActiveScreen = (screenName) => {
    return focusedRoute === screenName;
  };

  const iconColor = "black";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigateToScreen("Landing")}
        style={styles.iconContainer}
      >
        <Foundation
          name="home"
          size={24}
          color={isActiveScreen("Landing") ? iconColor : "gray"}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigateToScreen("Wallet")}
        style={styles.iconContainer}
      >
        <Ionicons
          name="ios-grid"
          size={24}
          color={isActiveScreen("Wallet") ? iconColor : "gray"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Profile")}
        style={styles.iconContainer}
      >
        <Ionicons
          name="ios-person-sharp"
          size={24}
          color={isActiveScreen("Profile") ? iconColor : "gray"}
        />
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
    backgroundColor: "#fff",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
  },
});

export default BottomNavigation;
