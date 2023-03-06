import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation/Navigation";
import { useFonts } from "expo-font";
import LoadingOverlay from "./components/LoadingOverlay";

export default function App() {
  // TODO
  // Get input for Plateu
  // Cannot be less than 0,0
  // Cannot have negative co-ordiantes
  /////////////// DONE ///////////////

  // Get rover start pos
  // Cannot be out of bounds pos

  // Get rover directions
  // NESW -> if L go one index back if R go one index right? e.g. is E and is L retract one to go N
  // If N +1 to y, S -1 to y
  // if E +1 to x, W -1 yo x

  // ASSUMPTIONS: goes off map = ded

  const [loaded] = useFonts({
    "roboto-light": require("./assets/fonts/Roboto/Roboto-Light.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!loaded) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
