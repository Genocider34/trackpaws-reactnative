import { View, StyleSheet } from "react-native";
import React from "react";
import SecondaryText from "../components/SecondaryText";
import PrimaryText from "../components/PrimaryText";
import UserInput from "../components/UserInput";
import PrimaryButton from "../components/PrimaryButton";

export default function ResetPasswordScreen() {
  return (
    <View style={styles.container}>
      <PrimaryText style={styles.headText}>Reset Password</PrimaryText>
      <View style={styles.inputContainer}>
        <SecondaryText>New Password</SecondaryText>
        <UserInput style={styles.input} />
        <SecondaryText>Confirm Password</SecondaryText>
        <UserInput style={styles.input} />
      </View>
      <PrimaryButton>Reset Password</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
  },
  headText: {
    flex: 1,
    fontSize: 36,
    textAlign: "center",
  },
  inputContainer: {
    flex: 2,
  },
  
});
