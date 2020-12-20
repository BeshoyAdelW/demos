import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import AntDesign from "@expo/vector-icons/Ionicons";
import Add from "../screens/Add";
import NewButton from "./NewButton";
import colors from "../config/colors";
import routes from "./routes";

const Tab = createBottomTabNavigator();

export default function TabNavigator(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === routes.HOME) {
            iconName = focused ? "home" : "home";
          } else if (route.name === routes.SETTINGS) {
            iconName = focused ? "settings" : "settings";
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.medium,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ title: "My home", tabBarBadge: 3 }}
      />
      <Tab.Screen
        name={routes.ADD}
        component={Add}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewButton onPress={() => navigation.navigate(routes.ADD)} />
          ),
        })}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
