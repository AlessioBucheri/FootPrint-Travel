import { useState } from "react";
import axios from "axios";

export default function useAirportSelect() {
    
    const [inputValue, setInputValue] = useState("");

    const loadOptions = async (inputValue, callback) => {
    if (inputValue.length < 2) {
      callback([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://autocomplete.travelpayouts.com/places2?term=${inputValue}&locale=it&types[]=city&types[]=airport`
      );

      // Filtra e mappa i risultati per mostrare solo gli aeroporti
      const airports = response.data
        .filter((item) => item.code && item.type === "airport")
        .map((airport) => ({
          value: airport.code,
          label: `${airport.code} - ${airport.name} (${airport.country_name})`,
        }));
      callback(airports);
    } catch (error) {
      console.error("Errore nel caricamento degli aeroporti", error);
      callback([]);
    }
  };

  const handleInputChange = (newValue) => {
    setInputValue(newValue); // Aggiorna lo stato con il nuovo valore di input
    return newValue; // Ritorna il nuovo valore per la ricerca
  };

  return { inputValue, setInputValue, loadOptions, handleInputChange };
}