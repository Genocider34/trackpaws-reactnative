import { View, Text, StyleSheet } from "react-native";
import React from "react";
import COLOR from "../constant/COLOR";
import PrimaryText from "../components/PrimaryText";
import SecondaryText from "../components/SecondaryText";
import UserInput from "../components/UserInput";
import PrimaryButton from "../components/PrimaryButton";

export default function VerificationScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <PrimaryText style={styles.headText}>SMS Verification</PrimaryText>
        <SecondaryText style={styles.text}>
          A text message with a six-digit verification code has been set to your
          phone number ending in 09*******19
        </SecondaryText>
      </View>
      <SecondaryText>Enter Code</SecondaryText>
      <View style={styles.inputContainer}>
        <UserInput style={styles.input} />
      </View>
      <PrimaryButton>Verify Code</PrimaryButton>
      <PrimaryButton>Cancel</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    margin: 40,
    borderWidth: 1,
    borderColor: "gray",
  },
  headerContainer: {
    flex: 1,
  },
  headText: {
    fontSize: 36,
    textAlign: "center",
  },
  inputContainer: {
    flex: 2,
    width: "100%",
  },
  text: {
    textAlign: "center",
  },
});
