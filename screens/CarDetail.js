import React, { useEffect, useContext, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FormContacto from "../components/Contact/FormContact";

import { VehiculosContext } from "../context/VehiculosContext";
import { COLORS, FONTS, TEXTS } from "../styles/base";

const CarDetail = ({ vehiculos, route, navigation }) => {
  const { id } = route.params;

  let { vehiculosFiltrados } = useContext(VehiculosContext);

  const [error, setError] = useState(false);
  const [productoAmpliado, setProductoAmpliado] = useState(null);
  const [loadingProductoAmpliado, setLoadingProductoAmpliado] = useState(true);

  useEffect(() => {
    if (vehiculosFiltrados) {
      const resultado = vehiculosFiltrados.filter(
        (vehiculo) => vehiculo.idcotizacion === id
      );
      setLoadingProductoAmpliado(false);
      setProductoAmpliado(resultado[0]);
    } else {
      setError(true);
    }
  }, [id, vehiculosFiltrados]); /*----*/

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      style={styles.screen}
    >
      {loadingProductoAmpliado ? (
        <View>
          <Text>Cargando</Text>
        </View>
      ) : null}
      {error ? (
        <View>
          <Text>Error</Text>
        </View>
      ) : null}
      {productoAmpliado && !error ? (
        <View key={productoAmpliado.idcotizacion} style={styles.carView}>
          <View style={styles.containImgVehicle}>
            <Image
              style={styles.imgVehicle}
              source={{
                uri: `http://${productoAmpliado.pictures[0].url}`,
              }}
            />
            <Image
              style={styles.imgVehicle}
              source={{
                uri: `http://${productoAmpliado.pictures[1].url}`,
              }}
            />
            <Image
              style={styles.imgVehicle}
              source={{
                uri: `http://${productoAmpliado.pictures[2].url}`,
              }}
            />
          </View>
          <View style={styles.containInfoVehicle}>
            <Text style={styles.titleVehicle}>
              {productoAmpliado.marca.toLowerCase()} {productoAmpliado.modelo}
            </Text>
            <Text style={styles.versionVehicle}>
              {productoAmpliado.version}
            </Text>

            <Text style={styles.infoVehicle}>
              {productoAmpliado.year} | {productoAmpliado.kilometros} Km. |{" "}
              {productoAmpliado.transmision}
            </Text>
            <Text style={styles.precioVehicle}>
              {productoAmpliado.precio === 0
                ? "Consulte precio"
                : `$ ${productoAmpliado.precio}`}
            </Text>
            <FormContacto />
          </View>
        </View>
      ) : null}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  carView: {
    width: "100%",
    backgroundColor: COLORS.white,
    flexDirection: "column",
    padding: 20,
    flexGrow: 1,
    height: "100%",
  },
  containImgVehicle: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containInfoVehicle: {
    backgroundColor: COLORS.grey,
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  containIconRight: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  titleVehicle: {
    color: COLORS.secondary,
    fontSize: FONTS.xl,
    fontFamily: FONTS.primary.bold,
    letterSpacing: 0.7,
    textTransform: "capitalize",
    textAlign: "center",
    paddingBottom: 10,
  },
  precioVehicle: {
    color: COLORS.black,
    fontSize: FONTS.lg,
    fontFamily: FONTS.primary.bold,
    letterSpacing: 0.7,
    textAlign: "center",
  },
  versionVehicle: {
    color: COLORS.black,
    fontSize: FONTS.md,
    fontFamily: FONTS.primary.regular,
    lineHeight: 18,
    letterSpacing: 0.7,
    textAlign: "center",
  },
  infoVehicle: {
    color: COLORS.black,
    fontSize: FONTS.sm,
    fontFamily: FONTS.primary.regular,
    lineHeight: 18,
    letterSpacing: 0.7,
    textAlign: "center",
  },
  imgVehicle: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.primary,
    resizeMode: "cover",
    borderRadius: 10,
  },
});

export default CarDetail;
