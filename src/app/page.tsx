'use client'

import { VehicleProvider } from "./context/VehicleContext";
import Teste from "./Teste";

export default function Home() { 

  return (
    <VehicleProvider>
      <div>
        TEXTO
      </div>
      <Teste />
    </VehicleProvider>
    
  );
}
