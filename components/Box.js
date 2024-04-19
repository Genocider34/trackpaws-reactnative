import { View, StyleSheet } from "react-native";

export default function Box({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: COLOR.darkBrown,
    borderStyle: "dashed",
    backgroundColor: COLOR.white,
    padding: 12,
  },
});
