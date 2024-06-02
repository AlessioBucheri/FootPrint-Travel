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
      `http://autocomplete.travelpayouts.com/places2?term=${inputValue}&locale=en&type[]=airport`
    );
    const airports = response.data.map((airport) => ({
      value: airport.code,
      label: `${airport.name} (${airport.code})`,
    }));
    callback(airports);
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
