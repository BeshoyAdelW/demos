import React, { useEffect, useState } from "react";

import styles from "./style";
import {
  Keyboard,
  View,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppButton, AppInput, AppText } from "../../components";
import AsyncStorage from "@react-native-community/async-storage";

export default function LoginScreen({ navigation }) {
  useEffect(() => {}, []);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPress = () => {
    if (user) {
      Alert.alert("Logged in!", `Hi ${user}!`);
      storeUserDate(user, "", "");
      // navigation.reset(
      //   {
      //     index: 0,
      //     routes: [{ name: "Home" }],
      //   },
      //   { user }
      // );
      navigation.navigate("Home");
    }
  };

  const onFbLoginPress = async () => {
    try {
      await Facebook.initializeAsync({
        appId: "3645104462179753",
      });
      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["email", "public_profile", "user_friends"],
      });
      if (type === "success") {
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.height(500)`
        );
        const user = await response.json();
        Alert.alert("Logged in!", `Hi ${user.name}!`);
        storeUserDate(user.name, token, user.picture.data.url);
        navigation.navigate("Home", { user, accessToken: token });
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  const onGoogleLoginPress = async () => {
    try {
      const { type, accessToken, user } = await Google.logInAsync({
        androidClientId: `456473923281-go57q0097mbtois8salj115f5t6fdvqn.apps.googleusercontent.com`,
        scopes: ["profile", "email"],
      });
      if (type === "success") {
        Alert.alert("Logged in!", `Hi ${user.name}!`);
        storeUserDate(user.name, accessToken, user.photoUrl);
        navigation.navigate("Home", { user, accessToken });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const storeUserDate = async (user, accessToken, image) => {
    const userData = { user, accessToken, image };
    try {
      await AsyncStorage.setItem("login", JSON.stringify(userData));
    } catch (error) {
      console.log("Storing data", error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="height">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Image
              style={styles.logoImage}
              source={require("../../assets/logo.png")}
            />
            <AppText style={styles.logoText}>Login</AppText>
            <AppText style={styles.title}>
              Enter your login details to access your account
            </AppText>
            <AppInput
              placeholder="Username"
              placeholderColor="#c4c3cb"
              value={user}
              onChangeText={(text) => setUser(text)}
            />
            <AppInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <AppButton
              style={{ margin: 50 }}
              onPress={() => onLoginPress()}
              title="Log in"
            />
            <View style={styles.loginContainer}>
              <TouchableOpacity onPress={() => onFbLoginPress()}>
                <Image
                  style={styles.fbLogo}
                  source={{
                    uri:
                      "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onGoogleLoginPress()}>
                <Image
                  style={styles.fbLogo}
                  source={{
                    uri:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/200px-Google_%22G%22_Logo.svg.png",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
