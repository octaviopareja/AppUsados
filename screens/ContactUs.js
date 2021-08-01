import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FormContacto from "../components/Contact/FormContact";
import { COLORS, FONTS } from "../styles/base";

const ContactUs = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={{ height: 280 }}>
        <Text style={styles.titPrincipal}>Envianos tu consulta</Text>
        <Text style={styles.subTit}>
          Si queres recibir mas informacion sobre nuestros vehiculos o tenes
          alguna duda, escribinos!
        </Text>
      </View>

      <FormContacto />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    padding: 25,
    paddingTop: 90,
  },
  titPrincipal: {
    fontSize: FONTS.lg,
    fontFamily: FONTS.primary.bold,
  },
  subTit: {
    fontSize: FONTS.md,
    fontFamily: FONTS.primary.regular,
    lineHeight: FONTS.lg,
  },
});

export default ContactUs;
