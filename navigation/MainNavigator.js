import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CarList from "../screens/CarList";
import CarDetail from "../screens/CarDetail";

import Colors from "../constants/colors";
import TabNavigator from "../screens/TabNavigator";
import Home from "../screens/Home";
import AboutUs from "../screens/AboutUs";
import ContactUs from "../screens/ContactUs";

const Stack = createStackNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />

      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{ title: "About Us" }}
      />

      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{ title: "Contact Us" }}
      />

      <Stack.Screen
        name="CarList"
        component={CarList}
        options={{ title: "Autos" }}
      />

      <Stack.Screen
        name="CarDetail"
        component={CarDetail}
        options={({ route }) => ({
          id: route.params.id,
          title: "Ver todos",
          headerShown: true,
        })}
      />

      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
