import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import SecondaryText from "../components/SecondaryText";
import UserInput from "../components/UserInput";
import AccentText from "../components/AccentText";
import COLOR from "../constant/COLOR";
import PrimaryButton from "../components/PrimaryButton";

export default function ForgotPasswordScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/padlock.png")}
        />
      </View>
      <View style={styles.userContainer}>
        <SecondaryText>Phone Number</SecondaryText>
        <View style={styles.inputContainer}>
          <AccentText style={styles.sixThree}>+63</AccentText>
          <UserInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={10}
          />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
          <PrimaryButton>Cancel</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.darkBrown,
  },
  userContainer: {
    flex: 5,
    marginHorizontal: 12,
    padding: 12,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
  },
  sixThree: {
    flex: 1,
  },
  input: {
    flex: 4,
    fontSize: 24,
  },
  buttonContainer: {
    marginTop: 24,
  },
});
