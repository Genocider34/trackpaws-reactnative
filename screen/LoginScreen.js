import {
  View,
  ImageBackground,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import COLOR from "../constant/COLOR";
import SecondaryText from "../components/SecondaryText";
import PrimaryText from "../components/PrimaryText";
import PrimaryButton from "../components/PrimaryButton";
import Icon from "../components/Icon";
import Box from "../components/Box";
import UserInput from "../components/UserInput";

export default function LoginScreen() {
  return (
    <View style={styles.outerContainer}>
      <ImageBackground
        source={require("../assets/images/bg.png")}
        resizeMode="repeat"
        imageStyle={styles.backgroundImage}
        style={styles.rootScreen}
      >
        <View style={styles.innerContainer}>
          {/* Header Text */}
          <View style={styles.headerTextContainer}>
            <PrimaryText style={styles.h1}>Track Paws</PrimaryText>
            <SecondaryText style={styles.text}>
              Easy way to track your pets to safety
            </SecondaryText>
          </View>

          <Box>
            <PrimaryText style={styles.h2}>Sign In</PrimaryText>
            <View style={styles.centerContainer}>
              {/* Text Input username */}
              <UserInput style={styles.input} placeholder="Enter Username" />

              {/* Text Input password */}
              <UserInput
                style={styles.input}
                placeholder="Enter Password"
                secureTextEntry={true}
              />
            </View>

            {/* Forgot Password Button */}
            <Pressable>
              <SecondaryText style={styles.endText}>
                Forgot Password?
              </SecondaryText>
            </Pressable>

            {/* Login Button */}
            <PrimaryButton style={styles.button}>Login</PrimaryButton>

            <PrimaryText style={styles.text}>
              ───────── Or continue with ─────────
            </PrimaryText>

            {/* Icons  */}
            <View style={styles.imageContainer}>
              <Icon source={require("../assets/images/google.png")} />
              <Icon source={require("../assets/images/facebook.png")} />
            </View>

            <View style={styles.registerContainer}>
              <SecondaryText>Not a member?</SecondaryText>
              <Pressable>
                <PrimaryText> Register now</PrimaryText>
              </Pressable>
            </View>
          </Box>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: COLOR.lightYellow,
  },
  innerContainer: {
    padding: 20,
  },
  h1: {
    fontSize: 50,
    color: COLOR.darkBrown,
    fontFamily: "CARAMEL-MOCACHINO",
  },
  h2: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
  headerTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
  },
  text: {
    marginBottom: 12,
    textAlign: "center",
  },
  centerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  endText: {
    textAlign: "right",
  },
  buttonContainer: {
    justifyContent: "space-around",
  },
  button: {
    marginVertical: 20,
    borderRadius: 10,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 12,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  rootScreen: {
    flex: 1,
  },
  input: {
    marginVertical: 8,
  },
});
