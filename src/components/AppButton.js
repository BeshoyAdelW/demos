import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default function AppButton({ style, title, ...otherProps }) {
  return (
    <View style={defaultStyles.button}>
      <LinearGradient
        colors={[colors.gradientColor1, colors.gradientColor2]}
        start={{ x: 1, y: 0.1 }}
        end={{ x: 0.1, y: 1 }}
        style={{ flex: 1, borderRadius: 21 }}
      >
        <TouchableOpacity
          style={[
            style,
            {
              margin: 0,
              flex: 1,
              padding: 0,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
            },
          ]}
          {...otherProps}
        >
          <Text style={defaultStyles.buttonText}>{title}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
