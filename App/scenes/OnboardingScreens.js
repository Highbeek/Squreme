import React, { useState, useRef } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import Onboard from "../components/Onboard";
import { slides } from "../constants";
import deprecatedPropTypes from "deprecated-react-native-prop-types";


const { width: screenWidth } = Dimensions.get("window");

const OnboardingScreens = ({ navigation }) => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const isCarousel = useRef(null);

  const handleNext = () => {
    if (currentScreenIndex < slides.length - 1) {
      setCurrentScreenIndex(currentScreenIndex + 1);
    } else {
      navigation.navigate("SignUp");
    }
  };

  const handleSkipToEnd = () => {
    if (isCarousel.current) {
      isCarousel.current.snapToItem(slides.length - 1);
      setCurrentScreenIndex(slides.length - 1);
    }
  };

  const renderItem = ({ item, index }) => (
    <Onboard
      description={item.description}
      subtitle={item.subtitle}
      img={item.img}
      isActive={index === currentScreenIndex}
      onPress={handleNext}
      skipToEnd={handleSkipToEnd}
      carouselRef={isCarousel}
      isLastScreen={index === slides.length - 1}
    />
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={slides}
        ref={isCarousel}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={(index) => setCurrentScreenIndex(index)}
        useScrollView={true}
      />

      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={slides.length}
          activeDotIndex={currentScreenIndex}
          dotStyle={styles.paginationDot}
          carouselRef={isCarousel}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
    </View>
  );
};

OnboardingScreens.propTypes = {
  navigation: deprecatedPropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paginationContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    position: "absolute",
    bottom: "35%",
  },
  paginationDot: {
    width: 25,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: "white",
  },
});

export default OnboardingScreens;
