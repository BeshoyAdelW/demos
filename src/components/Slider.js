import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ViewPager from "@react-native-community/viewpager";
import SliderItem from "./SliderItem";

export default function Slider({ items }) {
  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={styles.viewPager} initialPage={0}>
        {items.map((item) => (
          <SliderItem item={item} key={item.id} />
        ))}
      </ViewPager>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});
