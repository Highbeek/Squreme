import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function VerificationInput({ isVerified }) {
  const [verificationCode, setVerificationCode] = useState("");
  const [allDigitsEntered, setAllDigitsEntered] = useState(false);
  const verificationInputRefs = Array.from({ length: 5 }).map(() =>
    useRef(null)
  );
  const navigation = useNavigation();

  useEffect(() => {
    if (verificationCode.length === 5) {
      setAllDigitsEntered(true);
    } else {
      setAllDigitsEntered(false);
    }
  }, [verificationCode]);

  const handleVerificationCodeChange = (index, value) => {
    if (value.length === 1 && index < 4) {
      verificationInputRefs[index + 1].current.focus();
    }

    if (verificationCode.length === 4) {
      setAllDigitsEntered(true);
    } else {
      setAllDigitsEntered(false);
    }

    const newVerificationCode = verificationCode.split("");
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode.join(""));
  };

  const handleVerificationSubmit = () => {
    Keyboard.dismiss();
    if (allDigitsEntered) {
      navigation.navigate("TabScreens");
    }
  };

  const returnKeyType =
    allDigitsEntered && verificationCode.length === 5 ? "done" : "next";

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
            returnKeyType={index === 4 ? returnKeyType : "next"}
            editable={!isVerified}
            onSubmitEditing={index === 4 ? handleVerificationSubmit : null}
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
