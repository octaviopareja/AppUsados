import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import { COLORS, FONTS } from "../styles/base";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/splashHome.png")}
      style={styles.background}
    >
      <View>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        ></Image>
        <Text style={styles.text}>La mejor manera de comprar tu auto</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Vehiculos")}>
          <Text style={styles.button}>Quiero comprar un auto</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Nosotros")}>
          <Text style={styles.button}>Sobre Grupo Montironi</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Contacto")}>
          <Text style={styles.button}>Enviar una consulta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 280,
    marginLeft: "15%",
    marginTop: "10%",
  },
  text: {
    color: COLORS.white,
    marginTop: -50,
    marginBottom: 30,
    textAlign: "center",
    fontSize: FONTS.md,
    fontFamily: FONTS.primary.bold,
  },
  button: {
    backgroundColor: "white",
    color: COLORS.primary,
    width: "65%",
    borderRadius: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: "18%",
    padding: "4%",
    fontSize: FONTS.sm,
    fontFamily: FONTS.primary.medium,
    marginBottom: 20,
  },
});

export default Home;
