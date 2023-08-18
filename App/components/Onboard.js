import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import {  logo } from "../assets/index";
import { useNavigation } from "@react-navigation/native";

export const Onboard = ({
  description,
  subtitle,
  img,
  onPress,
  skipToEnd,
  isLastScreen,
  carouselRef,
}) => {
  const navigation = useNavigation();
  const handleNext = () => {
    if (carouselRef.current) {
      const nextIndex = carouselRef.current.currentIndex + 1;
      carouselRef.current.snapToItem(nextIndex);
    }

    onPress();
  };
  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const renderButton = () => {
    if (isLastScreen) {
      return (
        <TouchableOpacity
          style={styles.getStartedBtn}
          onPress={() => {
            goToSignUp();
          }}
        >
          <Text style={[styles.btnText, styles.getStartedBtnText]}>
            Get Started
          </Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <>
          <Pressable onPress={skipToEnd}>
            <Text style={styles.btnText}>Skip</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={handleNext}>
            <Text style={[styles.btnText, styles.btn]}>Next</Text>
          </Pressable>
        </>
      );
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.imgBackground}>
        <View style={styles.contentContainer}>
          <Image source={logo} style={styles.logo} />
        </View>

        <View style={styles.textContainer}>
          <View>
            <Text style={styles.title}>{description}</Text>
            <Text style={styles.subtitleText}>{subtitle}</Text>
          </View>
          <View style={styles.btnContainer}>{renderButton()}</View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
    marginRight: "auto",
    paddingHorizontal: 20,
    paddingTop: 100,
    paddingVertical: 20,
  },
  imgBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  logo: {
    maxWidth: "100%",
    maxHeight: "100%",
    alignSelf: "center",
  },
  textContainer: {
    height: "40%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    color: "white",
    fontSize: 30,
    textAlign: "left",
    fontWeight: "500",
  },
  subtitleText: {
    color: "white",
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },
  btn: {
    color: "black",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 15,
    
  },
  getStartedBtn: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 15,
    width: "100%",
  },
  getStartedBtnText: {
    color: "black",
  },
});

export default Onboard;
