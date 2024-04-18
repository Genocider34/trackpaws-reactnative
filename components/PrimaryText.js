import { StyleSheet, Text } from "react-native";
import COLOR from "../constant/COLOR";

// Bold Text
export default function PrimaryText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: COLOR.darkBrown,
    fontFamily: "Poppins-Bold",
  },
});
