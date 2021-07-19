import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FormContacto from "../components/Contact/FormContact";

const ContactUs = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Envianos tu consulta</Text>
      <FormContacto />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    padding: 15,
  },
});

export default ContactUs;
