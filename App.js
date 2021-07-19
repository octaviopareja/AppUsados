import React from "react";
import AppLoading from "expo-app-loading";
import MainNavigator from "./navigation/MainNavigator";
import VehiculosProvider from "./context/VehiculosContext";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_800ExtraBold,
  Raleway_900Black,
} from "@expo-google-fonts/raleway";

export default function App() {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
    Raleway_800ExtraBold,
    Raleway_900Black,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <VehiculosProvider>
      <MainNavigator />
    </VehiculosProvider>
  );
}
