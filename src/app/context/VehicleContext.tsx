import React, { createContext, ReactNode } from "react";
import useVehicleData from "../services/api"; 
import { Vehicle, LocationVehicle } from "../types/vehiclesApiTypes";

interface VehicleContextValue {
  vehicles: Vehicle[] | undefined; 
  locations: LocationVehicle[] | undefined; 
  isLoading: boolean;
  isError: boolean;
  error: any;
  refetch: () => void; 
}

interface VehicleProviderProps {
  children: ReactNode;
}

const VehicleContext = createContext<VehicleContextValue>({
  vehicles: undefined,
  locations: undefined,
  isLoading: false,
  isError: false,
  error: null,
  refetch: () => {},
});

export default VehicleContext;

export function VehicleProvider(props: VehicleProviderProps) {
  const { data, isLoading, isError, error, refetch } = useVehicleData({
    refetchInterval: 30000, 
  });

  const vehicles = data?.vehicles;
  const locations = data?.locations;

  return (
    <VehicleContext.Provider value={{ vehicles, locations, isLoading, isError, error, refetch }}>
      {props.children}
    </VehicleContext.Provider>
  );
}