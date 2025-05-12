import React, { useContext, useEffect, useState } from 'react';
import VehicleContext from '@/app/context/VehicleContext';
import MapMarker from './AdvancedMarker';

interface vehicleStatusData {
    id: string | number;
    position: {
        lat: number;
        lng: number;
    },
    model?: string;
    name?: string;
    nameOwner?: string;
    plate?: string;  
    status?:string;
    fleet?: string;
}

export default function MovingMarker() {
    const { locations } = useContext(VehicleContext);
    const [vehicleStatus, setVehicleStatus] = useState<vehicleStatusData[]>();

    useEffect(() => {
        if (locations && locations.length > 0) {
            //console.log("LOC", locations);
            const vehicleStatusArr = locations.map((loc: any, index: number) => ({
                id: index,
                position: { 
                    lat: loc.lat,
                    lng: loc.lng,
                },                
                name: loc.name,                
                plate: loc.plate,
                fleet: loc.fleet
            }));
            setVehicleStatus(vehicleStatusArr);
        } else {
            setVehicleStatus([]);
        }
    }, [locations]);    

    return (
        <>
            {vehicleStatus?.map((item: vehicleStatusData) => (
                <MapMarker key={`${item.id}a`} vehicle={item} />
            ))}
        </>
    );
};