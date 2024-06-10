import React from "react";
import helmet from "helmet";
import AirportSelect from "../AirportSelect/AirportSelect";
import useAirportForm from "../../Hooks/AirportForm/useAirportForm";
import useAirportSelect from "../../Hooks/AirportSelect/useAirportSelect";
import "./AirportForm.css";
import { Helmet } from "react-helmet";

export default function AirportForm() {
  const {
    departureAirport,
    arrivalAirport,
    setDepartureAirport,
    setArrivalAirport,
    passenger,
    setPassenger,
    calculationDone,
    ecologicalFootprint,
    calculateEcologicalFootprint,
    resetForm,
  } = useAirportForm();

  const { resetInputValue: resetDepartureInput } = useAirportSelect();
  const { resetInputValue: resetArrivalInput } = useAirportSelect();

  return (
    <div id='airport-form' className='airport-form child'>
      <Helmet>
        <title>FootPrint Travel - Try it now!</title>
        <meta name='airport form' content='FootPrint Travel' />
      </Helmet>
      <h2 className='title'>Calcola Impronta Ecologica</h2>
      <AirportSelect
        placeholder='From'
        onChange={setDepartureAirport}
        value={departureAirport}
        isDeparture={true}
        resetInputValue={resetDepartureInput}
      />
      <AirportSelect
        placeholder='To'
        onChange={setArrivalAirport}
        value={arrivalAirport}
        isDeparture={false}
        resetInputValue={resetArrivalInput}
      />
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
      <button
        className='reset'
        onClick={() => resetForm(resetDepartureInput, resetArrivalInput)}
        disabled={!calculationDone}
      >
        Reset
      </button>
    </div>
  );
}
