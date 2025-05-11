import React, {useContext, useEffect, useRef, useState} from 'react';
import {Marker} from '@vis.gl/react-google-maps';
import VehicleContext from '@/app/context/VehicleContext';

export const MovingMarker = () => {

  const {locations} = useContext(VehicleContext);

  const [position, setPosition] = useState<google.maps.LatLngLiteral[]>([]);

  // Mantém uma referência para o ID do intervalo
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (locations && locations.length > 0) {
      const positionsArr = locations.map((loc: any) => ({
        lat: loc.lat,
        lng: loc.lng,
      }));
      setPosition(positionsArr);
    } else {
      setPosition([]); // Se locations estiver vazio, position também deve ser
    }
  }, [locations]);


    // Loga a 'position' a cada 2 minutos
    useEffect(() => {
      // Limpa o intervalo anterior se o componente for desmontado ou 'position' mudar
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
  
      // 120000
      // Configura um novo intervalo
      intervalRef.current = setInterval(() => {
        // console.log("position LAT:", position[0].lat, "position LON:", position[0].lng);
        // console.log("LOC", locations);
        // console.log("POS", position);
      }, 60000); // 2 minutos em milissegundos
  
      // Função de limpeza para cancelar o intervalo quando o componente for desmontado
      // return () => {
      //   if (intervalRef.current) {
      //     clearInterval(intervalRef.current);
      //   }
      // };
    }, [position]); // Dependência em 'position' para reconfigurar o intervalo se a posição mudar
  
    // <Marker position={position[0]}></Marker>
    // {locations.map((item: any, index: number) => (
    //   <Marker key={index} position={item[index]}></Marker>
    // ))}
    console.log("POS", position);
  return (
    <div>
      {position.map((item: any, index: number) => {
        return (
          <Marker key={index} position={item}></Marker>
        )
      })}
    </div>
  );
};
