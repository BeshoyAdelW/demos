import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/login/login";
import TabNavigator from "./TabNavigator";

export default function AppNavigator(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
}
