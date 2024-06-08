import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import airportCodes from "airport-codes"; // Libreria per la mappatura città-codice

const AirportSelect = ({ placeholder, onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const loadOptions = async (inputValue, callback) => {
    // 1. Cerca codici aeroportuali basati sulla città
    const airportsByCity = airportCodes.findWhere({ city: inputValue });

    // 2. Se trovati, crea le opzioni per il menu a tendina
    if (airportsByCity && airportsByCity.length > 0) {
      const options = airportsByCity.map((airport) => ({
        value: airport.iata, // Usa il codice IATA
        label: `${airport.name} (${airport.iata}) - ${airport.city}`, // Mostra nome, codice e città
      }));
      callback(options);
      return;
    }

    // 3. Se non trovati, esegui la ricerca standard per aeroporto (come prima)
    if (inputValue.length < 2) {
      callback([]);
      return;
    }

    const response = await axios.get(
      `https://autocomplete.travelpayouts.com/places2?term=${inputValue}&locale=en&type[]=airport`
    );
    const airports = response.data.map((airport) => ({
      value: airport.code,
      label: `${airport.name} (${airport.code})`,
    }));
    callback(airports);
  };

  // Aggiorna l'input value ogni volta che cambia
  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <AsyncSelect
      className='airport-select'
      placeholder={placeholder}
      loadOptions={loadOptions}
      onChange={onChange}
      onInputChange={handleInputChange} // Aggiungi il gestore per l'input
      noOptionsMessage={() => "Nessun aeroporto trovato"}
      filterOption={(option, inputValue) => {
        // Allow filtering by airport code or name
        return (
          option.value.toLowerCase().includes(inputValue.toLowerCase()) ||
          option.label.toLowerCase().includes(inputValue.toLowerCase())
        );
      }}
    />
  );
};

export default AirportSelect;
