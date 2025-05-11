'use client'

import GoogleMapsFrame from "./components/Map/GoogleMapsFrame";
import Header from "./components/header/Header";
import { VehicleProvider } from "./context/VehicleContext";
import Teste from "./Teste";

export default function Home() { 

  return (
    <VehicleProvider>
      <div className="text-white w-full h-full px-10">
        <Header />
        <GoogleMapsFrame />
      </div>
      <Teste />
    </VehicleProvider>
    
  );
}
