import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

export default function Rating({ count }) {
  return (
    <View style={styles.container}>
      <AntDesign
        name={count >= 1 ? "star" : "staro"}
        size={15}
        color={colors.tertiary2}
      />
      <AntDesign
        name={count >= 2 ? "star" : "staro"}
        size={15}
        color={colors.tertiary2}
      />
      <AntDesign
        name={count >= 3 ? "star" : "staro"}
        size={15}
        color={colors.tertiary2}
      />
      <AntDesign
        name={count >= 4 ? "star" : "staro"}
        size={15}
        color={colors.tertiary2}
      />
      <AntDesign
        name={count >= 5 ? "star" : "staro"}
        size={15}
        color={colors.tertiary2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
});
