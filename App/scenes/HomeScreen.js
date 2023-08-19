import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { prof, not, notb, dot, balance, note } from "../assets/index";
import { quickAccessItems } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  return (
    <LinearGradient
      colors={["#00C6FB", "#ffffff", "#ffffff"]}
      style={styles.linearGradient}
    >
      <View style={styles.profileContainer}>
        <View style={styles.profileHeader}>
          <View style={styles.profileImage}>
            <Image source={prof} />
          </View>
          <View style={styles.profileText}>
            <Text style={styles.profileGreeting}>Hello,</Text>
            <Text style={styles.profileName}>David Oloye</Text>
          </View>
        </View>
        <View style={styles.notificationContainer}>
          <Image source={notb} />

          <Image source={not} style={{ position: "relative" }} />
          <Image source={dot} style={styles.notification} />
        </View>
      </View>
      <View style={styles.balance}>
        <Text style={styles.balanceTxt}>Wallet Balance</Text>
        <Image source={balance} style={styles.balImg} />
      </View>
      <View style={styles.profileBtn}>
        <Pressable style={[styles.btn, styles.btnFund]}>
          <Text style={styles.fundTxt}>Fund</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.btnWith]}>
          <Text>Withdraw</Text>
        </Pressable>
      </View>

      <View style={styles.accessContainer}>
        <Text style={styles.accessTxt}>Quick Access</Text>
        <View style={styles.accessIcon}>
          {quickAccessItems.map((item, index) => (
            <View key={index} style={styles.icon}>
              <View style={styles.iconContainer}>
                <Image source={item.image} />
              </View>
              <Text style={styles.iconText}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.transactionContainer}>
        <Text style={styles.transTxt}>Recent Transactions</Text>

        <View style={styles.tranNote}>
          <Image source={note} style={styles.transImg} />
          <Text style={styles.transTitle}>No recent transaction</Text>
          <Text style={styles.transDescription}>
            You have not performed any transaction, you can start sending and
            requesting money from your contacts.
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingTop: 30,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    marginRight: 10,
  },
  profileText: {
    flexDirection: "column",
    gap: 5,
  },
  profileGreeting: {
    color: "#828282",
    fontWeight: "500",
  },
  profileName: {},
  notificationContainer: {
    flexDirection: "row-reverse",
    gap: 10,
  },
  notif: {},
  notification: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  balance: {
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  balanceTxt: {
    paddingVertical: 10,
    color: "#000A4A",
  },
  profileBtn: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    textAlign: "center",
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: 120,
    marginVertical: 25,
  },
  btnFund: {
    backgroundColor: "#000A4A",
  },
  fundTxt: {
    color: "#fff",
  },
  btnWith: {
    backgroundColor: "#E1E1E1",
    color: "#000",
  },
  accessContainer: {
    gap: 15,
  },
  accessTxt: {
    fontSize: 20,
    fontWeight: "500",
    color: "#656565",
  },
  accessIcon: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 30,
  },
  iconContainer: {
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#F6EFFB",
    borderWidth: StyleSheet.hairlineWidth,
  },
  icon: {
    alignItems: "center",
    gap: 10,
  },
  iconText: {
    fontSize: 18,
    color: "#3E3E3E",
  },
  transactionContainer: {
    paddingVertical: 40,
  },
  transTxt: {
    color: "#656565",
    fontSize: 20,
    fontWeight: "500",
  },
  tranNote: {
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
  },
  transImg: {
    marginTop: 30,
  },
  transDescription: {
    width: "100%",
    textAlign: "center",
    paddingHorizontal: 5,
    fontSize: 18,
    lineHeight: 25,
    color: "#9A9A9A",
  },
  transTitle: {
    fontSize: 28,
  },
});

export default Home;
