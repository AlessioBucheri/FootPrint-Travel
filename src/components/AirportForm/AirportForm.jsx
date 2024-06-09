import React from "react";
import AirportSelect from "../AirportSelect/AirportSelect";
import useAirportForm from "../../Hooks/AirportForm/useAirportForm";
import "./AirportForm.css";

export default function AirportForm() {
  const {
    setDepartureAirport,
    setArrivalAirport,
    passenger,
    setPassenger,
    calculationDone,
    ecologicalFootprint,
    calculateEcologicalFootprint,
    resetForm,
  } = useAirportForm();
  return (
    <div id='airport-form' className='airport-form child'>
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
}
