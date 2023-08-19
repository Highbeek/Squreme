import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OnboardingScreens from "./App/scenes/OnboardingScreens";
import SignUpScreen from "./App/scenes/SignUpScreen";
import SignUpVerification from "./App/scenes/SIgnUpVerification";
import BottomNavigation from "./App/navigation/BottomNavigation";
import HomeScreen from "./App/scenes/HomeScreen";
import WalletScreen from "./App/scenes/WalletScreen";
import ProfileScreen from "./App/scenes/ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreens = ({ route }) => {
  const { name: activeTab } = route;

  return (
    <Tab.Navigator
      tabBar={(props) => (
        <BottomNavigation
          activeTab={props.state.routeNames[props.state.index]} 
          {...props}
          options={{ headerShown: false }}
        />
      )}
    >
      <Tab.Screen
        name="Landing"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={OnboardingScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verification"
          component={SignUpVerification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabScreens"
          component={TabScreens}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
