import React from "react";
import AsyncSelect from "react-select/async";
import useAirportSelect from "../../Hooks/AirportSelect/useAirportSelect";

export default function AirportSelect({
  placeholder,
  onChange,
  value,
  isDeparture,
  resetInputValue,
}) {
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
        onChange={(selectedOption) => {
          onChange(selectedOption);
          if (!selectedOption) {
            resetInputValue(); // Reset the input value when the selection is cleared
          }
        }}
        onInputChange={handleInputChange}
        inputValue={inputValue}
        value={value}
        noOptionsMessage={() => "Nessun aeroporto trovato"}
        cacheOptions
        defaultOptions
        isClearable
      />
    </div>
  );
}
