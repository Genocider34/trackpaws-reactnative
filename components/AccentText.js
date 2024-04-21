import { StyleSheet, Text } from "react-native";
import COLOR from "../constant/COLOR";

// background Text
export default function AccentText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    color: COLOR.white,
    fontFamily: "Poppins-Regular",
    backgroundColor: COLOR.lightBrown,
    paddingVertical: 12,
    paddingHorizontal: 12,
    margin: 8,
    fontSize: 24,
    borderRadius: 10,
    textAlign: "center",
  },
});
