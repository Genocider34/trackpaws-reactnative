import { TextInput, StyleSheet } from "react-native";
import React from "react";

export default function UserInput({ placeholder, secureTextEntry }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={COLOR.white}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLOR.lightBrown,
    color: COLOR.white,
    fontFamily: "Poppins-Regular",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 12,
    margin: 8,
    borderRadius: 10,
  },
});
