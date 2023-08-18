import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function VerificationInput({ isVerified }) {
  const [verificationCode, setVerificationCode] = useState("");
  const verificationInputRefs = Array.from({ length: 5 }).map(() =>
    useRef(null)
  );
  const navigation = useNavigation();

  const handleVerificationCodeChange = (index, value) => {
    if (value.length <= 1) {
      setVerificationCode((prevCode) => {
        const newCode = prevCode.split("");
        newCode[index] = value;
        return newCode.join("");
      });

      if (value.length === 1 && index < 4) {
        verificationInputRefs[index + 1].current.focus();
      }
    }
  };

  const handleVerificationSubmit = () => {
    Keyboard.dismiss();
    navigation.navigate("MainApp");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.verificationContainer}>
        {verificationInputRefs.map((inputRef, index) => (
          <TextInput
            key={index}
            ref={inputRef}
            style={[
              styles.verificationInput,
              isVerified && { opacity: 0.5, borderColor: "gray" },
            ]}
            value={verificationCode[index]}
            onChangeText={(value) => handleVerificationCodeChange(index, value)}
            maxLength={1}
            keyboardType="numeric"
            editable={!isVerified}
            onSubmitEditing={
              index === verificationInputRefs.length - 1
                ? handleVerificationSubmit
                : null
            }
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  verificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  verificationInput: {
    width: 35,
    height: 45,
    borderRadius: 10,
    marginHorizontal: 5,
    textAlign: "center",
    fontSize: 24,
    backgroundColor: "#F2F8FF",
  },
});
