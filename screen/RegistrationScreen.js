import { View, Text, StyleSheet } from "react-native";
import React from "react";
import COLOR from "../constant/COLOR";
import PrimaryText from "../components/PrimaryText";

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <PrimaryText style={styles.text}>Name</PrimaryText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.darkBrown,
  },
  text: {
    color: COLOR.white,
  },
});
