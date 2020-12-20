import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";

function NewButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[colors.gradientColor1, colors.gradientColor2]}
        start={{ x: 0.9, y: 0.8 }}
        style={styles.container}
      >
        <MaterialCommunityIcons name="plus" color={colors.white} size={40} />
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.light,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 30,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});

export default NewButton;
