import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { Dimensions } from "react-native";
import Slider from "../components/Slider";

const width = Dimensions.get("window").width;

export default function Home(props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <AppText style={styles.greeting}>Good Evening Alexis</AppText>
        <AppText style={{ color: colors.secondaryColor2 }}>
          Your target for today is to keep positive mindset and smile to
          everyone you meet.
        </AppText>
      </View>
      <View style={styles.bottomContainer}>
        <AppText style={[styles.question, { marginBottom: 32 }]}>
          What are you doing today?
        </AppText>
        <View style={styles.listItem}></View>
        <View style={styles.listItem}></View>
        <AppText style={[styles.question, { marginBottom: 16 }]}>
          Visit a Specialist
        </AppText>
        <View style={styles.slider}>
          <Slider />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.light,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    backgroundColor: colors.secondaryColor4,
    flex: 0.4,
    justifyContent: "center",
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34,
    padding: 50,
    width,
  },
  bottomContainer: {
    backgroundColor: colors.light,
    flex: 0.6,
    justifyContent: "center",
    width,
    padding: 34,
  },
  greeting: {
    fontSize: 25,
    width: 184,
    fontWeight: "bold",
    color: colors.secondary,
    marginBottom: 17,
  },
  question: {
    color: colors.secondary,
  },
  listItem: {
    height: 80,
    backgroundColor: colors.primary,
    marginBottom: 21,
  },
  slider: {
    height: 80,
    backgroundColor: colors.primary,
    marginBottom: 21,
  },
});
