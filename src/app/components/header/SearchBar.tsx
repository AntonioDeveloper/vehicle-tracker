import VehicleContext from "@/app/context/VehicleContext";
import {useState, useEffect, ChangeEvent, useContext } from "react";

export default function SearchBar() {

  const [inputVal, setInputVal] = useState("");

  const { setSearchTerm } = useContext(VehicleContext);

//  useEffect(() => {
//   setSearchTerm(inputVal);
//   // console.log("inputVal", inputVal)
//  }, [inputVal]);

  return (
    <div className="w-1/2 flex justify-end">
      <form className="">
        <input className="" type="text" id="busca" name="busca" placeholder="Buscar por placa ou frota" minLength={10} maxLength={20} size={20} onChange={(e: ChangeEvent<HTMLInputElement>) => setInputVal(e.target.value)} />
        <input className="" type="submit" value="Buscar" onClick={(e) => {
          e.preventDefault();
          setSearchTerm(inputVal);
        }}/>
      </form>
    </div>
  )
}