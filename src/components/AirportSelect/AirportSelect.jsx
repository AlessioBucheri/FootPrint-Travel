import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import airportCodes from "airport-codes";

const AirportSelect = ({ placeholder, onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const loadOptions = async (inputValue, callback) => {
    // Cerca aeroporti in base alla città o al nome dell'aeroporto (o codice)
    let allAirports = [];

    // Se la lunghezza dell'input è almeno di 2 caratteri
    if (inputValue.length >= 2) {
      // Cerca per città
      const airportsByCity = airportCodes.findWhere({ city: inputValue });
      allAirports.push(...airportsByCity); // Aggiungi gli aeroporti della città al risultato

      // Cerca con Travelpayouts (per nome aeroporto o codice IATA)
      const response = await axios.get(
        `https://autocomplete.travelpayouts.com/places2?term=${inputValue}&locale=en&types[]=airport`
      );
      const tpAirports = response.data
        .filter((airport) => airport.code !== null)
        .map((airport) => ({
          ...airport,
          city: airport.city_name, // Rinomina in 'city' per coerenza
        }));
      allAirports.push(...tpAirports);
    }

    // Rimuovi duplicati basandoti sul codice IATA
    const uniqueAirports = allAirports.filter(
      (airport, index, self) =>
        index === self.findIndex((a) => a.iata === airport.iata)
    );

    // Formatta i risultati
    const options = uniqueAirports.map((airport) => ({
      value: airport.iata, // Il codice IATA viene passato come valore
      label: `${airport.name} (${airport.iata}) - ${airport.city}`,
    }));

    callback(options);
  };

  return (
    <AsyncSelect
      className='airport-select'
      placeholder={placeholder}
      loadOptions={loadOptions}
      onChange={onChange}
      noOptionsMessage={() => "Nessun aeroporto trovato"}
    />
  );
};

export default AirportSelect;
