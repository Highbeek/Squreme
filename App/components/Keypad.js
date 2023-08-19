import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import backImage from "../assets/back.png"; 

export const NumericKeypad = ({ onNumberPress, balance }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "back"];
  const rows = [];

  for (let i = 0; i < numbers.length; i += 3) {
    rows.push(numbers.slice(i, i + 3));
  }

  return (
    <View style={styles.numericKeypad}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.numericRow}>
          {row.map((number) => (
            <Pressable
              key={number}
              style={[
                styles.numberButton,
                number === "back" ? styles.specialButton : null,
              ]}
              onPress={() => onNumberPress(number)}
              disabled={number === "back" && balance <= 0}
            >
              {number === "back" ? (
                <Image
                  source={backImage}
                  style={[
                    styles.backImage,
                    styles.backButton,
                    balance <= 0 ? styles.disabledBackButton : null,
                  ]}
                />
              ) : (
                <Text style={styles.numberButtonText}>{number}</Text>
              )}
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  numericKeypad: {
    flexDirection: "column",
    alignItems: "center",
  },
  numericRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  numberButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    margin: 10,
  },
  numberButtonText: {
    color: "#fff",
    fontSize: 24,
  },
  
});

export default NumericKeypad;
