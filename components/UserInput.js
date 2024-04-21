import { TextInput, StyleSheet } from "react-native";
import React from "react";

export default function UserInput({
  placeholder,
  secureTextEntry,
  keyboardType,
  style,
  maxLength,
}) {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor={COLOR.white}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      maxLength={maxLength}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: COLOR.lightBrown,
    color: COLOR.white,
    fontFamily: "Poppins-Regular",
    padding: 24,
    margin: 8,
    borderRadius: 10,
    fontSize: 24,
  },
});
