import React, { useContext, useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./Home";
import AboutUs from "./AboutUs";
import CarList from "./CarList";
import ContactUs from "./ContactUs";

import { COLORS } from "../styles/base";

const TabOptions = {
  showIcon: true,
  style: {
    height: 80,
    paddingBottom: 10,
    paddingTop: 7,
    backgroundColor: "blue",
  },
  showLabel: false,
};

const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }) {
  let iconName;

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: COLORS.primary,
        inactiveTintColor: COLORS.lightgrey,
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            iconName = focused ? "home-sharp" : "ios-home-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Vehiculos"
        component={CarList}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            iconName = focused ? "car" : "car-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Nosotros"
        component={AboutUs}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Contacto"
        component={ContactUs}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            iconName = focused ? "ios-mail-sharp" : "ios-mail-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icono: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
  iconoActivo: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
});
