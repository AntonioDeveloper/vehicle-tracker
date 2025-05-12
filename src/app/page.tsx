'use client'

import GoogleMapsFrame from "./components/Map/GoogleMapsFrame";
import Header from "./components/header/Header";
import { VehicleProvider } from "./context/VehicleContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Home() { 

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <VehicleProvider>
      <div className="text-white w-full h-full px-10">
        <Header />
        <GoogleMapsFrame />
      </div>
    </VehicleProvider>
    </QueryClientProvider>
  );
}
