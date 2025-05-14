import VehicleContext from "@/app/context/VehicleContext"
import { useContext } from "react"
import { LocationVehicle, Vehicle } from "@/app/types/vehiclesApiTypes";

export default function List() {

  const {vehicles, locations } = useContext(VehicleContext);

  const fleet = locations?.map((item: LocationVehicle) => item.fleet);

  console.log("vehicles", vehicles, "locations", locations, "fleet", fleet);

  return (
    <div className="">
      <table className="">
        <thead>
          <tr>
            <th>Placa</th>
            <th>Frota</th>
            <th>Tipo</th>
            <th>Modelo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          
            {vehicles?.map((item: Vehicle, index: number) => {
              return (
                <tr key={index}>
                  <td>{item.plate}</td>
                  <td>{fleet?.[index]}</td>
                  <td>{item.type}</td>
                  <td>{item.model}</td>
                  <td>{item.status}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

 