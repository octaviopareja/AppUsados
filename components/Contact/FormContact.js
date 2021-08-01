import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import { COLORS, FONTS } from "../../styles/base";

const FormContacto = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Telefono</Text>
      <TextInput style={styles.input} />

      <View style={styles.button}>
        <Button color={COLORS.primary} title="Consultar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: COLORS.primary,
    margin: 10,
    marginLeft: 0,
    fontFamily: FONTS.primary.regular,
  },
  button: {
    marginTop: 20,
    fontFamily: FONTS.primary.regular,
    color: COLORS.primary,
    backgroundColor: COLORS.primary,
    height: 40,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 20,
  },
  input: {
    fontFamily: FONTS.primary.regular,
    backgroundColor: "white",
    borderColor: "grey",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  textArea: {
    height: 90,
    justifyContent: "flex-start",
    textAlignVertical: "top",
  },
});

export default FormContacto;
