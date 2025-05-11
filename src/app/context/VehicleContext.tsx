import React, { createContext, useEffect, useState, ReactNode } from "react";
import acessAPI from "../services/api";
import { Vehicle, LocationVehicle } from "../types/vehiclesApiTypes";

interface VehicleContextValue {
  vehicles: Vehicle[];
  locations: LocationVehicle[]; 
}

interface VehicleProviderProps {
  children: ReactNode;
}

const VehicleContext = createContext<VehicleContextValue>({
  vehicles: [],
  locations: [], 
});

export default VehicleContext;

export function VehicleProvider(props: VehicleProviderProps) {
  
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const [locations, setLocations] = useState<LocationVehicle[]>([]);

  async function getVehicleData() {
    try {
      const vehicleData = await acessAPI();

      if (vehicleData && vehicleData.vehicles) {
        setVehicles(vehicleData.vehicles);
      } else {
        setVehicles([]); 
        console.warn("Dados de veículos não encontrados ou em formato inesperado.");
      }

      if (vehicleData && vehicleData.locations) { 
        setLocations(vehicleData.locations); 
      } else {
        setLocations([]); 
        console.warn("Dados de localizações não encontrados ou em formato inesperado.");
      }
    } catch (error) {
      console.error("Erro ao buscar dados dos veículos:", error);
      setVehicles([]); 
      setLocations([]); 
    }
  }

  //120000

  useEffect(() => {
    setInterval(() => {
      console.log("Run interval")
      getVehicleData();
    }, 60000);
  }, []);

  return (
    <VehicleContext.Provider value={{ vehicles, locations }}>
      {props.children}
    </VehicleContext.Provider>
  );
}