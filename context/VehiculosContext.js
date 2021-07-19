import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//Crear el context
export const VehiculosContext = createContext();

//provider es donde se encuentran las funciones y state
const VehiculosProvider = (props) => {
  const filtrador = function filter(array, filters = {}) {
    let results = array;
    for (let key in filters) {
      const [field, kind] = key.split("_");
      switch (kind) {
        case "min": {
          let value = Number(filters[key]);
          results = results.filter((entry) => entry[field] >= value);
          break;
        }
        case "max": {
          let value = Number(filters[key]);
          results = results.filter((entry) => entry[field] <= value);
          break;
        }
        case "includes":
          results = results.filter((entry) =>
            entry[field].includes(filters[key])
          );
          break;
        case undefined:
        case "equals":
          // eslint-disable-next-line eqeqeq
          results = results.filter((entry) => entry[field] == filters[key]);
          break;
      }
    }
    return results;
  };

  const [vehiculos, setVehiculos] = useState([]);
  const [vehiculosFiltrados, setVehiculosFiltrados] = useState([]);
  const [filtro, setFiltro] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(false);

  //ME TRAIGO LOS VEHICULOS
  useEffect(() => {
    const obtenerVehiculos = async () => {
      setCargando(true);
      try {
        //GET FROM JSON REMOTE
        const respuesta = await axios.get(
          "http://montironi.com/marketing/json_usados/usadostest.json",
          { crossdomain: true }
        );

        //console.log(respuesta.data);

        setCargando(false);
        //console.log("la respuesta es" + respuesta.data);
        //console.log("Los vehiculos son" + respuesta.data);
        //STATES FOR API
        setVehiculos(respuesta.data.vehicles);
        setVehiculosFiltrados(respuesta.data.vehicles);
      } catch (error) {
        console.log(error);
        setCargando(false);
        setError(true);
      }
    };

    obtenerVehiculos();
  }, []);

  //FILTRAR LOS VEHICULOS
  useEffect(() => {
    if (filtro) {
      const filtroFinal = {};

      if (filtro.marca) {
        filtroFinal.marca_includes = filtro.marca;
      }

      if (filtro.year) {
        filtroFinal.year_min = filtro.year;
      }

      if (filtro.kilometros) {
        filtroFinal.kilometros_max = filtro.kilometros;
      }

      if (filtro.precioDesde) {
        filtroFinal.precio_min = filtro.precioDesde;
      }

      if (filtro.precioHasta) {
        filtroFinal.precio_max = filtro.precioHasta;
      }

      const results = filtrador(vehiculos, filtroFinal);

      setVehiculosFiltrados(results);
    }
  }, [filtro]);

  return (
    <VehiculosContext.Provider
      value={{
        vehiculosFiltrados,
        filtro,
        setFiltro,
        cargando,
        error,
      }}
    >
      {props.children}
    </VehiculosContext.Provider>
  );
};

export default VehiculosProvider;
