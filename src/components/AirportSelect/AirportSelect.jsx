import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import useAirportSelect from "../../Hooks/AirportSelect/useAirportSelect";
export default function AirportSelect({ placeholder, onChange, isDeparture }) {
  const { loadOptions, inputValue, handleInputChange } = useAirportSelect();

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
}
