import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { Dimensions } from "react-native";
import Slider from "../components/Slider";
import AsyncStorage from "@react-native-community/async-storage";
import { Image } from "react-native";

const width = Dimensions.get("window").width;

export default function Home({ route, navigation }) {
  const [user, setUser] = useState("");
  const [userImageUri, setUserImageUri] = useState("");

  const getUserData = async () => {
    try {
      let value = await AsyncStorage.getItem("login");
      if (value != null) {
        let { user, image } = JSON.parse(value);
        setUser(user);
        setUserImageUri(image);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  const renderUserImage = () => {
    if (userImageUri !== "") {
      return <Image style={styles.userImage} source={{ uri: userImageUri }} />;
    }
    return (
      <Image
        style={styles.userImage}
        source={require("../assets/Portrait_Placeholder.png")}
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <AppText style={styles.greeting}>Good Evening {user}</AppText>
        <AppText style={{ color: colors.secondaryColor2 }}>
          Your target for today is to keep positive mindset and smile to
          everyone you meet.
        </AppText>
        {renderUserImage()}
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
  userImage: {
    position: "absolute",
    top: 71,
    right: 34,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.white,
  },
});
