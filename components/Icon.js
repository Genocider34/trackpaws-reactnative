import { View, Image, StyleSheet } from "react-native";
import COLOR from "../constant/COLOR";

export default function Icon({ source }) {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: COLOR.darkBrown,
    marginHorizontal: 24,
    padding: 6,
  },
  image: {
    width: 50,
    height: 50,
  },
});
