import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_REACT_APP_API_URL

const DataFetcher = ({ selectedOption, children }) => {
  const [rentaFijaData, setRentaFijaData] = useState([]);
  const [accionesData, setAccionesData] = useState([]);
  const [variacionData, setVariacionData] = useState([]);
  
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);

      try {
        if (selectedOption === 'rf') {
          const rentaFijaResponse = await axios.get(API_URL);
          setRentaFijaData(rentaFijaResponse.data);
        } else {
          const accionesResponse = await axios.get(API_URL + '?name=acciones');
          setAccionesData(accionesResponse.data);

          const variacionResponse = await axios.get(API_URL + '?name=varacciones');
          setVariacionData(variacionResponse.data);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError("Error al obtener los datos.");
      }
    };

    fetchData();
  }, [selectedOption]);

  if (error) return <div>{error}</div>;

  // Pasa los datos al componente hijo
  return children(rentaFijaData, accionesData, variacionData);
};

export default DataFetcher;
