import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import airportCodes from "airport-codes";

const AirportSelect = ({ placeholder, onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const loadOptions = async (inputValue, callback) => {
    // 1. Cerca aeroporti in base alla città o al nome dell'aeroporto
    const airportsByCity = airportCodes.findWhere({ city: inputValue });
    const airportsByName = airportCodes.findWhere({ name: inputValue });

    // 2. Combina i risultati e rimuovi i duplicati
    const allAirports = [...airportsByCity, ...airportsByName];
    const uniqueAirports = allAirports.filter(
      (airport, index, self) =>
        index === self.findIndex((a) => a.iata === airport.iata)
    );

    // 3. Crea le opzioni per il menu a tendina
    if (uniqueAirports.length > 0) {
      const options = uniqueAirports.map((airport) => ({
        value: airport.iata,
        label: `${airport.name} (${airport.iata}) - ${airport.city}`,
      }));
      callback(options);
      return;
    }

    // 4. Se non trovati, esegui la ricerca standard per aeroporto (come prima)
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
