import React from "react";
import { Image, View, Text } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import Rating from "./Rating";
import SmallButton from "./SmallButton";

export default function SliderItem({ style, item, ...otherProps }) {
  return (
    <View
      style={[
        defaultStyles.listItem,
        {
          margin: 0,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        },
      ]}
      {...otherProps}
    >
      <Image
        style={{
          width: 62,
          height: 62,
          alignSelf: "flex-start",
        }}
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
        <Text style={{ color: "grey", fontSize: 12 }}>{item.speciality}</Text>
        <Text
          style={{
            color: colors.secondary,
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          {item.name}
        </Text>
        <Rating count={item.rating} />
      </View>
      <SmallButton
        style={{
          width: 47,
          alignSelf: "flex-start",
          flex: 0.1,
          borderColor: colors.tertiary2,
          borderWidth: 2,
        }}
        title="Book"
        textColor={colors.tertiary2}
      />
    </View>
  );
}
