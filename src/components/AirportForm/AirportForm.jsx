import React, { useState } from "react";
import axios from "axios";
import AirportSelect from "../AirportSelect/AirportSelect";

import "./AirportForm.css";
const AirportForm = () => {
  const [departureAirport, setDepartureAirport] = useState(null);
  const [arrivalAirport, setArrivalAirport] = useState(null);
  const [ecologicalFootprint, setEcologicalFootprint] = useState(null);
  const [passenger, setPassenger] = useState(1);
  const [calculationDone, setCalculationDone] = useState(false);

  const calculateEcologicalFootprint = async () => {
    if (!departureAirport || !arrivalAirport) {
      alert("Seleziona entrambi gli aeroporti");
      return;
    }
    try {
      const params = new URLSearchParams();
      params.append("segments[0][origin]", departureAirport.value);
      params.append("segments[0][destination]", arrivalAirport.value);
      params.append("cabin_class", "economy");
      params.append("passengers", passenger);

      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}${
          import.meta.env.VITE_FLIGHT_FOOTPRINT_ENDPOINT
        }`,
        {
          params: params,
          auth: {
            username: import.meta.env.VITE_API_KEY,
            password: "",
          },
        }
      );
      setEcologicalFootprint(response.data.footprint);
      setCalculationDone(true);
    } catch (error) {
      console.error("Errore nel calcolo dell'impronta ecologica", error);
    }
  };

  const resetForm = () => {
    setDepartureAirport(null);
    setArrivalAirport(null);
    setEcologicalFootprint(null);
    setPassenger(1);
    setCalculationDone(false);
  };

  return (
    <div id='airport-form' className='airport-form  child'>
      <h2 className='title'>Calcola Impronta Ecologica</h2>
      <AirportSelect placeholder='From' onChange={setDepartureAirport} />
      <AirportSelect placeholder='To' onChange={setArrivalAirport} />
      <input
        className='input-passenger'
        type='number'
        name='passeggeri'
        id='passeggeri'
        min='1'
        value={passenger === 1 && !calculationDone ? "" : passenger}
        onChange={(e) => setPassenger(e.target.value)}
        placeholder='Select passenger'
        disabled={calculationDone}
      />
      <button className='calculate' onClick={calculateEcologicalFootprint}>
        Calcola Impronta Ecologica
      </button>
      {ecologicalFootprint && (
        <p className='ecological-footprint'>
          Carbon Footprint: {ecologicalFootprint * passenger} kg CO2
        </p>
      )}
      <button className='reset' onClick={resetForm} disabled={!calculationDone}>
        Reset
      </button>
    </div>
  );
};

export default AirportForm;
