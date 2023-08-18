import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={28}
          color="#000A4A"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.headerTxt}>Enter Your Phone Number</Text>
      </View>
      <Text style={styles.subtitleTxt}>
        We’ll send an SMS with a code to verify your phone number
      </Text>
      <View>
        <TextInput placeholder="" />
      </View>
      <View style={styles.refId}>
        <Text style={styles.refText}>Have a referral ID?</Text>
        <MaterialIcons name="redeem" size={24} color="purple" />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.refBtn}
          onPress={() => {
            navigation.navigate("Verification");
          }}
        >
          <Text style={styles.refBtnText}>Proceed</Text>
        </TouchableOpacity>
        <View style={styles.accTxtContainer}>
          <Text>Already have an account? </Text>
          <Text style={styles.accText}>Login here</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: "auto",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  headerTxt: {
    color: "#000A4A",
    fontWeight: "600",
    fontSize: 24,
  },
  subtitleTxt: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 30,
    color: "#000A4A",
    marginVertical: 30,
  },
  refId: {
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  refText: {
    fontSize: 18,
    color: "purple",
  },
  refBtn: {
    backgroundColor: "#000A4A",
    paddingVertical: 15,
    borderRadius: 10,
  },
  refBtnText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    position: "relative",
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  accTxtContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  accText: {
    textAlign: "center",
    color: "purple",
  },
});
