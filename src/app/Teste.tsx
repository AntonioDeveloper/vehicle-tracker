import { useContext } from "react"
import VehicleContext from "./context/VehicleContext"

export default function Teste() {
  const {vehicles, locations} = useContext(VehicleContext)

  // console.log("vehicles", vehicles, "locations", locations);

  return (
    <div>
    TESTE 2
  </div>
  )
}