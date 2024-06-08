import React from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";

const AirportSelect = ({ placeholder, onChange }) => {
  const loadOptions = async (inputValue, callback) => {
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

  return (
    <AsyncSelect
      filterOption={(option, inputValue) => {
        // Consenti il filtraggio per codice aeroportuale o nome
        return (
          option.value.toLowerCase().includes(inputValue.toLowerCase()) ||
          option.label.toLowerCase().includes(inputValue.toLowerCase())
        );
      }}
      className='airport-select'
      placeholder={placeholder}
      loadOptions={loadOptions}
      onChange={onChange}
      noOptionsMessage={() => "Nessun aeroporto trovato"}
    />
  );
};

export default AirportSelect;
