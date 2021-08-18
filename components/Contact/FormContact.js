import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ViewBase,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import PopupFormOk from "./PopupFormOk";
import { useForm } from "react-hook-form";
import { COLORS, FONTS } from "../../styles/base";
import emailjs from "emailjs-com";
import { useNavigation } from "@react-navigation/native";
const FormContacto = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    register,
  } = useForm();
  const [showConfirm, setShowConfirm] = useState(false);
  const [mailError, setMailError] = useState(null);
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    telefono: "",
  });

  useEffect(() => {
    register("name", {
      required: { value: true, message: "Este campo es obligatorio" },
    });
    register("email", {
      required: { value: true, message: "Escribe tu email" },
    });
    register("telefono", {
      required: { value: true, message: "Escribe tu telefono" },
    });
    setToSend({
      name: register("name"),
      email: register("email"),
      telefono: register("telefono"),
    });
  }, [register]);

  //console.log(getValues());

  const onSubmit = () => {
    setIsLoading(true);

    emailjs
      .send("appMontironi", "usados_001", toSend, "user_o8vRRkBGTevjkxYUoE7Aq")
      .then((response) => {
        setShowConfirm((prev) => !prev);
        setIsLoading(false);
      })
      .catch((err) => {
        setMailError(true);
        console.log(err);
      });
  };

  //console.log(toSend);

  return (
    <View style={styles.container}>
      <PopupFormOk
        isVisible={showConfirm}
        title="¡Mensaje enviado!"
        subtext="Un representante de Montironi, se pondrá en contacto lo más pronto posible."
        onConfirm={() => navigation.navigate("Home")}
      />

      <Text style={styles.label}>Nombre</Text>
      {errors.name && <Text style={styles.errMsg}>{errors.name.message}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue("name", text)}
      />

      <Text style={styles.label}>Email</Text>
      {errors.email && (
        <Text style={styles.errMsg}>{errors.email.message}</Text>
      )}
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue("email", text)}
      />

      <Text style={styles.label}>Telefono</Text>
      {errors.telefono && (
        <Text style={styles.errMsg}>{errors.telefono.message}</Text>
      )}
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue("telefono", text)}
      />

      <View>
        <TouchableOpacity
          color={COLORS.primary}
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
        >
          {isLoading ? (
            <ActivityIndicator size="large" color="#FFFFFF" />
          ) : (
            <Text style={styles.textButton}>Consultar</Text>
          )}
        </TouchableOpacity>
      </View>

      {mailError && (
        <Text style={styles.errMsg}>
          Se ha producido un error. Intente mas tarde
        </Text>
      )}
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
    paddingTop: 8,
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
  textButton: {
    fontSize: FONTS.sm,
    fontFamily: FONTS.primary.regular,
    color: COLORS.white,
    alignSelf: "center",
  },
  errMsg: {
    color: COLORS.danger,
    fontFamily: FONTS.primary.regular,
    fontSize: FONTS.xs,
    textAlign: "left",
    marginBottom: 10,
  },
});

export default FormContacto;
