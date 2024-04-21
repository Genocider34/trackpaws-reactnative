import { View, Text } from "react-native";
import React from "react";
import SecondaryText from "../components/SecondaryText";

export default function ResetPasswordScreen() {
  return (
    <View style={styles.container}>
      <PrimaryText style={styles.headText}>SMS Verification</PrimaryText>

      <SecondaryText>New Password</SecondaryText>
      <UserInput style={styles.input} />
      <SecondaryText>Confirm Password</SecondaryText>
      <UserInput style={styles.input} />
      <PrimaryButton>Reset Password</PrimaryButton>
    </View>
  );
}
