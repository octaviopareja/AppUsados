import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { COLORS, FONTS, TEXTS } from "../../styles/base";
import { Ionicons } from "@expo/vector-icons";

const Car = ({ vehiculos, navigation }) => {
  const handleSelected = (id, marca, modelo) => {
    navigation.navigate("CarDetail", { id: id, marca: marca, modelo: modelo });
  };

  return vehiculos.map((vehiculo) => (
    <TouchableOpacity
      key={vehiculo.idcotizacion}
      style={styles.carView}
      onPress={() =>
        handleSelected(vehiculo.idcotizacion, vehiculo.marca, vehiculo.modelo)
      }
    >
      <View style={styles.containImgVehicle}>
        <Image
          style={styles.imgVehicle}
          source={{
            uri: `http://${vehiculo.pictures[0].url}`,
          }}
        />
      </View>
      <View style={styles.containInfoVehicle}>
        <Text style={styles.titleVehicle}>
          {vehiculo.marca.toLowerCase()} {vehiculo.modelo}
          {console.log(`http://www.${vehiculo.pictures[0].url}`)}
        </Text>
        <Text style={styles.versionVehicle}>{vehiculo.version}</Text>

        <Text style={styles.infoVehicle}>
          {vehiculo.year} | {vehiculo.kilometros} Km. | {vehiculo.transmision}
        </Text>
        <Text style={styles.precioVehicle}>
          {vehiculo.precio === 0 ? "Consulte precio" : `$ ${vehiculo.precio}`}
        </Text>
      </View>
      <View style={styles.containIconRight}>
        <Ionicons name="chevron-forward" size={24} color={COLORS.lightgrey} />
      </View>
    </TouchableOpacity>
  ));
};

const styles = StyleSheet.create({
  carView: {
    width: "100%",
    backgroundColor: COLORS.white,
    marginTop: 20,
    flexDirection: "row",
    padding: 20,
  },
  containImgVehicle: {
    width: 100,
    height: 100,
    flexDirection: "column",
  },
  containInfoVehicle: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 20,
  },
  containIconRight: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  titleVehicle: {
    color: COLORS.secondary,
    fontSize: FONTS.lg,
    fontFamily: FONTS.primary.regular,
    lineHeight: 28,
    letterSpacing: 0.7,
    textTransform: "capitalize",
  },
  precioVehicle: {
    color: COLORS.black,
    fontSize: FONTS.md,
    fontFamily: FONTS.primary.bold,
    lineHeight: 18,
    letterSpacing: 0.7,
  },
  versionVehicle: {
    color: COLORS.black,
    fontSize: FONTS.sm,
    fontFamily: FONTS.primary.regular,
    lineHeight: 18,
    letterSpacing: 0.7,
  },
  infoVehicle: {
    color: COLORS.black,
    fontSize: FONTS.xs,
    fontFamily: FONTS.primary.regular,
    lineHeight: 18,
    letterSpacing: 0.7,
  },
  imgVehicle: {
    width: 100,
    height: 100,
    backgroundColor: "#3aaa35",
    resizeMode: "cover",
    borderRadius: 10,
  },
});

export default Car;
