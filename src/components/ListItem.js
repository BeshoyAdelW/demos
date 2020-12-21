import React from "react";
import { Image } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import SmallButton from "./SmallButton";

export default function ListItem({ style, item, ...otherProps }) {
  return (
    <View style={defaultStyles.listItem}>
      <TouchableOpacity
        style={[
          style,
          {
            margin: 0,
            flex: 1,
            padding: 0,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          },
        ]}
        {...otherProps}
      >
        <Image
          style={{ width: 36, height: 36, alignSelf: "flex-start" }}
          source={item.imageSrc}
          resizeMode="stretch"
        />
        <View
          style={{
            alignSelf: "flex-start",
            paddingHorizontal: 16,
            flex: 0.85,
          }}
        >
          <Text style={{ color: "grey", fontSize: 12 }}>{item.category}</Text>
          <Text
            style={{
              color: colors.secondary,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {item.title}
          </Text>
          <Text style={{ color: "grey", fontSize: 14 }}>{item.body}</Text>
        </View>
        <SmallButton
          style={{
            backgroundColor: item.buttonColor,
            width: 47,
            alignSelf: "flex-start",
            flex: 0.1,
          }}
          title={item.buttonText}
        />
      </TouchableOpacity>
    </View>
  );
}
