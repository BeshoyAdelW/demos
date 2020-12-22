import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default function SmallButton({
  style,
  title,
  textColor = colors.white,
  ...otherProps
}) {
  return (
    <View
      style={[
        {
          marginLeft: 0,
          height: 26,
          borderRadius: 12,
        },
      ]}
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
            borderRadius: 12,
          },
        ]}
        {...otherProps}
      >
        <Text
          style={[
            defaultStyles.buttonText,
            { fontSize: 10, textTransform: "uppercase", color: textColor },
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
