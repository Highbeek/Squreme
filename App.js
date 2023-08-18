import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Onboard from "./App/components/Onboard";
import OnboardingScreens from "./App/scenes/OnboardingScreens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./App/scenes/SignUpScreen";
import SignUpVerification from "./App/scenes/SIgnUpVerification";
import BottomNavigation from "./App/navigation/BottomNavigation";
import HomeScreen from "./App/scenes/HomeScreen";
import WalletScreen from "./App/scenes/WalletScreen";
import ProfileScreen from "./App/scenes/ProfileScreen";

const Stack = createNativeStackNavigator();
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
          name="MainApp"
          component={BottomNavigation}
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
