import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  Text,
  Pressable,
} from "react-native";
import { clock, not } from "../assets/index";
import NumericKeypad from "../components/Keypad";

const WalletScreen = () => {
  const [balance, setBalance] = useState(0);

 const handleNumberPress = (number) => {
   if (number === "back") {
     setBalance(Math.floor(balance / 10)); 
   } else {
     setBalance((prevBalance) => prevBalance * 10 + number);
   }
 };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.notificationContainer}>
        <Image source={not} />
        <Image source={clock} />
        <View style={styles.middle}>
          <Text style={styles.middleTitle}>Wallet Balance</Text>
          <Text style={styles.middleSubtitle}>₦ 5,200</Text>
        </View>
      </View>

      <View style={styles.walletContain}>
        <View style={styles.wallet}>
          <Text style={[styles.txt, { fontSize: 24 }]}>₦</Text>
          <Text style={[styles.txt, { fontSize: 64 }]}>{balance}</Text>
        </View>
        <View>
          <NumericKeypad onNumberPress={handleNumberPress} balance={balance} />
        </View>
        <View style={styles.bttn}>
          <Pressable style={styles.btn}>
            <Text style={{ color: "#9B9B9B" }}>Request</Text>
          </Pressable>
          <Pressable style={styles.btn}>
            <Text style={{ color: "#9B9B9B" }}>Send</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 10, 74, 1)",
  },
  notificationContainer: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingTop: 20,
  },
  middle: {
    position: "absolute",
    top: "50%",
    left: "30%",
    paddingHorizontal: 24,
    paddingVertical: 18,
    backgroundColor: "rgba(159, 86, 212, 0.1)",
    borderRadius: 18,
  },
  middleTitle: {
    color: "#BDBDBD",
    fontWeight: "400",
    fontSize: 12,
    textAlign: "center",
    letterSpacing: 1.3,
  },
  middleSubtitle: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 1.4,
  },
  walletContain: {
    marginTop: 20,
    paddingVertical: 20,
  },
  wallet: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    color: "#fff",
    textAlign: "center",
  },
  bttn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  btn: {
    backgroundColor: "#28283A",
    alignItems: "center",
    width: 150,
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderRadius:10
  },
});

export default WalletScreen;
