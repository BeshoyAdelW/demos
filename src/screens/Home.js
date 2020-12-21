import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { Dimensions } from "react-native";
import Slider from "../components/Slider";
import AsyncStorage from "@react-native-community/async-storage";
import { Image } from "react-native";
import SmallButton from "../components/SmallButton";
import ListItem from "../components/ListItem";

const width = Dimensions.get("window").width;

export default function Home({ route, navigation }) {
  const [user, setUser] = useState("");
  const [userImageUri, setUserImageUri] = useState("");
  const [data, setData] = useState([
    {
      id: "1",
      category: "Doctors",
      title: "Brain Checkout",
      body: "Have an appointment today",
      imageSrc: require("../assets/brain.png"),
      buttonText: "View",
      buttonColor: colors.error,
    },
    {
      id: "2",
      category: "Laboratory",
      title: "Do check up",
      body: "Don't forget to bring the list with you",
      imageSrc: require("../assets/flask.png"),
      buttonText: "Set",
      buttonColor: colors.tertiary,
    },
    {
      id: "3",
      category: "Pharmacy",
      title: "Purchase Prescription",
      body: "Delivery available",
      imageSrc: require("../assets/medicine.png"),
      buttonText: "View",
      buttonColor: colors.error,
    },
  ]);

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

  const renderItem = ({ item }) => (
    <ListItem
      imageSrc="../assets/flask.png"
      style={styles.listItem}
      item={item}
    />
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <AppText style={styles.greeting}>Good Evening {user}</AppText>
        <AppText style={{ color: colors.secondaryColor2, lineHeight: 22 }}>
          Your target for today is to keep positive mindset and smile to
          everyone you meet.
        </AppText>
        <View style={{ marginLeft: 0, flexDirection: "row" }}>
          <SmallButton
            onPress={() => {
              console.log("details");
            }}
            title="more details"
            style={{ backgroundColor: colors.secondary, width: 91 }}
          />
          <SmallButton
            onPress={() => {
              console.log("profile");
            }}
            title="view your profile"
            style={{ backgroundColor: colors.gradientColor1, width: 116 }}
          />
        </View>
        {renderUserImage()}
      </View>
      <View style={styles.bottomContainer}>
        <AppText style={[styles.question, { marginBottom: 32 }]}>
          What are you doing today?
        </AppText>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
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
    flex: 0.7,
    width,
    padding: 34,
  },
  greeting: {
    fontSize: 25,
    width: 214,
    fontWeight: "bold",
    color: colors.secondary,
    marginBottom: 17,
    marginTop: 75,
  },
  question: {
    color: colors.secondary,
  },
  slider: {
    height: 80,
    backgroundColor: colors.primary,
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
