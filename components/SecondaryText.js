import { StyleSheet, Text } from "react-native";
import COLOR from "../constant/COLOR";

// Regular Text
export default function SecondaryText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: COLOR.darkBrown,
    fontFamily: "Poppins-Regular",
  },
});
