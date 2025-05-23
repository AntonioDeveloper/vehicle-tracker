import React, { createContext, ReactNode, useState } from "react";
import useInfiniteVehicleData  from "../services/api"; 
import { Vehicle, LocationVehicle } from "../types/vehiclesApiTypes";
import { InfiniteQueryObserverResult } from "@tanstack/react-query";

interface VehicleContextValue {
  vehicles: Vehicle[] | undefined; 
  locations: LocationVehicle[] | undefined; 
  isLoading: boolean;
  isError: boolean;
  error: any;
  refetch: () => void; 
  fetchNextPage: () => Promise<any>;
  hasNextPage: boolean;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
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
  fetchNextPage: () => Promise.resolve({} as InfiniteQueryObserverResult<{ 
    vehicles: Vehicle[];
    locations: LocationVehicle[];
    totalPages: number;
  }, unknown>),
  hasNextPage: false,
  searchTerm: "",
  setSearchTerm: () => ""
});

export default VehicleContext;

export function VehicleProvider(props: VehicleProviderProps) {
  const { data, isLoading, isError, error, refetch, fetchNextPage, hasNextPage } = useInfiniteVehicleData ({
    refetchInterval: 30000, 
  });

  const [searchTerm, setSearchTerm ] = useState("");

  const vehicles = data?.pages.flatMap(page => page.vehicles) || undefined;
  const locations = data?.pages.flatMap(page => page.locations) || undefined;

  return (
    <VehicleContext.Provider value={{ vehicles, locations, isLoading, isError, error, refetch, fetchNextPage, hasNextPage, searchTerm, setSearchTerm }}>
      {props.children}
    </VehicleContext.Provider>
  );
}