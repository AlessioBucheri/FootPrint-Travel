import { useState } from "react";
import axios from "axios";

export default function useAirportForm() {
    const [departureAirport, setDepartureAirport] = useState(null);
    const [arrivalAirport, setArrivalAirport] = useState(null);
    const [ecologicalFootprint, setEcologicalFootprint] = useState(null);
    const [passenger, setPassenger] = useState(1);
    const [calculationDone, setCalculationDone] = useState(false);

    const calculateEcologicalFootprint = async () => {
        if (
        !departureAirport ||
        !departureAirport.value ||
        !arrivalAirport ||
        !arrivalAirport.value
        ) {
        alert("Seleziona entrambi gli aeroporti.");
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append("segments[0][origin]", departureAirport.value);
      params.append("segments[0][destination]", arrivalAirport.value);
      params.append("cabin_class", "economy");
      params.append("passengers", passenger);

      const url = `${import.meta.env.VITE_API_BASE_URL}${
        import.meta.env.VITE_FLIGHT_FOOTPRINT_ENDPOINT
      }`;

      const response = await axios.get(url, {
        params: params,
        auth: {
          username: import.meta.env.VITE_API_KEY,
          password: "", // La password è vuota
        },
      });
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
    return {
        ecologicalFootprint,
        passenger,
        calculationDone,
        setDepartureAirport,
        setArrivalAirport,
        setEcologicalFootprint,
        setPassenger,
        setCalculationDone,
        calculateEcologicalFootprint,
        resetForm,
    };
}