import React, { useContext } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import { VehiculosContext } from "../context/VehiculosContext";
import Car from "../components/Cars/Car";

const CarList = ({ navigation }) => {
  const { vehiculosFiltrados, filtro, cargando, error } =
    useContext(VehiculosContext);

  return (
    <View style={styles.screen}>
      {error ? (
        <View>
          <Text>Hubo un error al buscar los vehiculos</Text>
        </View>
      ) : null}
      {cargando ? (
        <View>
          <Text>Cargando</Text>
        </View>
      ) : null}
      {vehiculosFiltrados.length === 0 && !cargando ? (
        <View>
          <Text>No hay vehiculos para mostrar con ese filtro seleccionado</Text>
        </View>
      ) : null}
      {!cargando && vehiculosFiltrados.length > 0 ? (
        <ScrollView style={styles.carList}>
          <Car vehiculos={vehiculosFiltrados} navigation={navigation} />
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  carList: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
  },
});

export default CarList;
