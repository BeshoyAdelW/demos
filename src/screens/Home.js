import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <AppText>Home</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
