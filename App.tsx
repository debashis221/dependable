import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import OnBoarding from "./views/Onboarding/OnBoarding";

export default function App() {
  const colorScheme = useColorScheme();
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
  });
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: "transparent",
    },
  };
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer theme={theme}>
      <SafeAreaView style={[styles.container, themeContainerStyle]}>
        <StatusBar />
        <OnBoarding />
      </SafeAreaView>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Montserrat_500Medium",
  },
  lightContainer: {
    backgroundColor: "#ffffff",
  },
  darkContainer: {
    backgroundColor: "#000000",
  },
  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#d0d0c0",
  },
});
