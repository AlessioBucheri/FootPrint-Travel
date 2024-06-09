import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";

const AirportSelect = ({ placeholder, onChange, isDeparture }) => {
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

      // Filtra e mappa i risultati per mostrare solo gli aeroporti, anche se l'utente ha cercato una città
      const airports = response.data
        .filter((item) => item.code && item.type === "airport")
        .map((airport) => ({
          value: airport.code,
          label: `${airport.code} - ${airport.name} (${airport.country_name})`,
        }));
      callback(airports);
      console.log(airports);
    } catch (error) {
      console.error("Errore nel caricamento degli aeroporti", error);
      callback([]);
    }
  };

  const handleInputChange = (newValue) => {
    setInputValue(newValue); // Aggiorna lo stato con il nuovo valore di input
    return newValue; // Ritorna il nuovo valore per la ricerca
  };

  return (
    <div
      className={`airport-select-container ${
        isDeparture ? "departure" : "arrival"
      }`}
    >
      <AsyncSelect
        className='airport-select'
        placeholder={placeholder}
        loadOptions={loadOptions}
        onChange={onChange}
        onInputChange={handleInputChange} // Gestisce i cambiamenti nell'input
        inputValue={inputValue} // Usa lo stato per il valore dell'input
        noOptionsMessage={() => "Nessun aeroporto trovato"}
        cacheOptions // Abilita la cache per migliorare le prestazioni
        defaultOptions // Mostra suggerimenti anche senza input iniziale
      />
    </div>
  );
};

export default AirportSelect;
