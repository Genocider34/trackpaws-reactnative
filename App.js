import { StatusBar, Platform, StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screen/LoginScreen";
import { useFonts } from "expo-font";
import RegistrationScreen from "./screen/RegistrationScreen";
import ForgotPasswordScreen from "./screen/ForgotPasswordScreen";
import VerificationScreen from "./screen/VerificationScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "CARAMEL-MOCACHINO": require("./assets/fonts/CARAMEL-MOCACHINO.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LoginScreen />
      {/* <RegistrationScreen /> */}
      {/* <EnrollmentRegistrationScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      {/* <VerificationScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
