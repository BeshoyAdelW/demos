import React from "react";
import { Image } from "react-native";
import { View, Text } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import SmallButton from "./SmallButton";

export default function ListItem({ style, item, ...otherProps }) {
  return (
    <View
      style={[
        defaultStyles.listItem,
        { flex: 1, alignItems: "center", flexDirection: "row" },
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
          flex: 1,
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
          elevation: 4,
        }}
        title={item.buttonText}
      />
    </View>
  );
}
