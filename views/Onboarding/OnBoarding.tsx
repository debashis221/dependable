import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  useColorScheme,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Slide, slides } from "../../constants/slides";
import { FC, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";

const { width } = Dimensions.get("window");

const OnBoarding = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const carouselRef = useRef<Carousel<Slide>>(null);
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;

  const handleNext = (): void => {
    if (carouselRef.current) {
      carouselRef.current.snapToNext();
      setActiveSlide(activeSlide + 1);
    }
  };

  const handleGetStarted = (): void => {
    // Handle "Get Started" button press
    console.log("Get Started");
  };

  const renderItem: FC<{
    item: Slide;
  }> = ({ item }): JSX.Element => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={[styles.title, themeTextStyle]}>{item.title}</Text>
          <Text style={[styles.text, themeTextStyle]}>{item.text}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar style={"auto"} backgroundColor="#8D1436"/>
      <Carousel
        ref={carouselRef}
        data={slides}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index: number) => setActiveSlide(index)}
      />
      <View style={styles.bottomContainer}>
        <Pagination
          dotsLength={slides.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.dotStyle}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />

        {activeSlide < slides.length - 1 ? (
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

interface Styles {
  container: ViewStyle;
  textContainer: ViewStyle;
  slide: ViewStyle;
  image: ViewStyle;
  lightThemeText: ViewStyle;
  darkThemeText: ViewStyle;
  title: ViewStyle;
  text: ViewStyle;
  bottomContainer: ViewStyle;
  button: ViewStyle;
  buttonText: ViewStyle;
  paginationContainer: ViewStyle;
  dotStyle: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  textContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxWidth: 300,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    width: Dimensions.get("window").width,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 32,
  },
  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#d0d0c0",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 16,
    marginRight: 16,
    textAlign: "left",
  },
  text: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 16,
    textAlign: "left",
  },
  bottomContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 12,
  },
  button: {
    backgroundColor: "#8D1436",
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginEnd: 16,
    borderRadius: 100,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Montserrat_500Medium",
    fontSize: 20,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  paginationContainer: {
    paddingTop: 8,
    paddingBottom: 16,
    justifyContent: "flex-start",
  },
  dotStyle: {
    width: 23,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "#8D1436",
  },
});
export default OnBoarding;
