import React, { useState } from 'react';
import Link from 'next/link';
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';

interface vehicleProps {
  id: string | number;
  model?: string;
  nameOwner?: string;
  plate?: string;  
  status?:string;
  fleet?: string;
  position: {
    lat: number;
    lng: number;
  };
  name?: string;
}

interface LocationData {
  id: string | number;
  lat: number;
  lng: number;
}

interface MapMarkerProps {
  vehicle: vehicleProps;
  // vehicleData?: vehicleProps;
}

export default function MapMarker(props: MapMarkerProps) {
    console.log("props", props.vehicle);
    const [infowindowOpen, setInfowindowOpen] = useState(false);
    const [markerRef, marker] = useAdvancedMarkerRef();

    const handleMarkerClick = () => {
        setInfowindowOpen(true);
    };

    return (
        <>
            <AdvancedMarker
                ref={markerRef}
                position={props.vehicle.position}
                onClick={handleMarkerClick}
            />
            {infowindowOpen && (
                <InfoWindow
                    anchor={marker}
                    maxWidth={200}
                    onCloseClick={() => setInfowindowOpen(false)}
                >
                  <p className="text-zinc-950">Frota: {props.vehicle.fleet}</p>
                  <p className="text-zinc-950">Nome: {props.vehicle.name}</p>
                  <p className="text-zinc-950">Placa: {props.vehicle.name}</p>
                  <Link href={`http://maps.google.com/maps?q=${props.vehicle.position.lat},${props.vehicle.position.lng}`} target="_blank" className="text-zinc-950">Posição: {`http://maps.google.com/maps?q=${props.vehicle.position.lat},${props.vehicle.position.lng}`}</Link>
                </InfoWindow>
            )}
        </>
    );
};
