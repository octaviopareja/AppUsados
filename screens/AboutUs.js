import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, FONTS } from "../styles/base";
const AboutUs = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.titPrincipal}>Quienes somos</Text>
        <Text style={styles.subTit}>
          Como resultado de una continua inversión para mejorar nuestros
          procesos y perseguir la satisfacción de todos nuestros clientes, es
          que en la actualidad contamos con 6 salones, con más de 300 empleados
          comprometidos y dedicados al trabajo para que estés más cerca de tu
          vehiculo.
        </Text>
        <Text style={styles.subTit}>
          Estamos para ayudarte a encontrar tu nuevo vehículo. Nuestros asesores
          están capacitados y comprometidos para ofrecerte las mejores opciones
          del mercado, con la mejor experiencia.
        </Text>
      </View>
      <Image
        style={styles.sucursal}
        source={require("../assets/sucursal.png")}
      ></Image>

      <View style={styles.marcas}>
        <Image
          style={styles.logo}
          source={require("../assets/logo_ford.png")}
        ></Image>
        <Image
          style={styles.logo}
          source={require("../assets/logo_fiat.png")}
        ></Image>
        <Image
          style={styles.logo}
          source={require("../assets/logo_hyundai.png")}
        ></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 80,
    padding: 25,
  },
  titPrincipal: {
    fontSize: FONTS.lg,
    fontFamily: FONTS.primary.bold,
    paddingBottom: 10,
  },
  subTit: {
    fontSize: FONTS.md,
    fontFamily: FONTS.primary.regular,
    lineHeight: FONTS.lg,
    paddingBottom: 15,
  },
  sucursal: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginTop: 15,
  },
  logo: { maxWidth: 100, margin: 20 },
  marcas: {
    justifyContent: "space-around",
    flexDirection: "row",
    paddingTop: 20,
  },
});

export default AboutUs;
