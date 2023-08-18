import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import VerificationInput from "../components/VerificationInput";

export default function SignUpVerification() {
  const [isVerified, setIsVerified] = useState(false);
  const [remainingTime, setRemainingTime] = useState(59);
  const navigation = useNavigation();

  const handleVerificationSuccess = () => {
    console.log("Verification successful!");
    setIsVerified(true);
  };

  useEffect(() => {
    if (isVerified) {
      navigation.navigate("MainApp");
    }
  }, [isVerified, navigation]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);

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
        <Text style={styles.headerTxt}>Verify Phone Number</Text>
      </View>
      <Text style={styles.subtitleTxt}>
        Please input the five digit code that was sent to your phone number
        below
      </Text>
      <View style={styles.VerifyToken}>
        <View>
          <VerificationInput
            isVerified={isVerified}
            onVerificationSuccess={handleVerificationSuccess}
          />
        </View>
        <Text style={styles.verifySeconds}>
          {`0:${remainingTime.toString().padStart(2, "0")}`}{" "}
        </Text>
        <Text style={styles.tokenText}>
          Having trouble receiving SMS?{" "}
          <Text style={{ color: "purple" }}>Resend</Text> Or try other options
          below
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Pressable
          style={[
            styles.btn,
            remainingTime > 0 ? styles.disabledBtn : styles.enabledBtn,
          ]}
          disabled={remainingTime === 0}
        >
          <Text>Call me</Text>
        </Pressable>
        <Pressable
          style={[
            styles.btn,
            { backgroundColor: "#000A4A" },
            remainingTime > 0 ? styles.disabledBtn : styles.enabledBtn,
          ]}
          disabled={remainingTime === 0}
        >
          <Text style={{ color: "#fff" }}>Whatsapp</Text>
        </Pressable>
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
    fontSize: 16,
    paddingHorizontal: 10,
    color: "#000A4A",
    marginVertical: 30,
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
  VerifyToken: {
    justifyContent: "center",
    alignItems: "center",
  },
  verifySeconds: {
    fontSize: 18,
    color: "purple",
  },
  tokenText: {
    textAlign: "center",
    marginVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 30,
  },

  btnContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "auto",
  },
  btn: {
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  disabledBtn: {
    opacity: 0.5,
  },
});
