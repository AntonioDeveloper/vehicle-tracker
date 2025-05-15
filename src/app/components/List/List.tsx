import VehicleContext from "@/app/context/VehicleContext"
import { useContext } from "react"
import { LocationVehicle, Vehicle } from "@/app/types/vehiclesApiTypes";

export default function List() {

  const {vehicles, locations, searchTerm } = useContext(VehicleContext);

  const fleet = locations?.map((item: LocationVehicle) => item.fleet);

  const vehiclesFleetArray = vehicles?.map((v, index) => {
    return { ...v, fleet: fleet?.[index]};
  })

  let searchResult: Vehicle | undefined = vehiclesFleetArray?.find((v) => v.plate === searchTerm || v.fleet === searchTerm) ;

  console.log("searchResult", searchResult);

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
        {
        searchResult 
        ? 
        (
        <tr key={searchResult.id}> 
          <td>{searchResult.plate}</td>
          <td>{searchResult.fleet}</td>
          <td>{searchResult.type}</td>
          <td>{searchResult.model}</td>
          <td>{searchResult.status}</td>
        </tr>
          ) : (
            vehicles?.map((item: Vehicle, index: number) => (
              <tr key={index}>
                <td>{item.plate}</td>
                <td>{item.fleet}</td>
                <td>{item.type}</td>
                <td>{item.model}</td>
                <td>{item.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
 