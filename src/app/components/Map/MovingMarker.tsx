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
//     const [infowindowOpen, setInfowindowOpen] = useState(false);
//     const [markerRef, marker] = useAdvancedMarkerRef();

//     const handleMarkerClick = () => {
//         setInfowindowOpen(true);
//     };

//     return (
//         <>
//             <AdvancedMarker
//                 ref={markerRef}
//                 position={position}
//                 onClick={handleMarkerClick}
//             />
//             {infowindowOpen && (
//                 <InfoWindow
//                     anchor={marker}
//                     maxWidth={200}
//                     onCloseClick={() => setInfowindowOpen(false)}
//                 >
//                     This is an example for the{' '}
//                     <code style={{ whiteSpace: 'nowrap' }}>&lt;AdvancedMarker /&gt;</code>{' '}
//                     combined with an Infowindow.
//                 </InfoWindow>
//             )}
//         </>
//     );
// };

export default function MovingMarker() {
    const { locations } = useContext(VehicleContext);
    const [vehicleStatus, setVehicleStatus] = useState<vehicleStatusData[]>();

    useEffect(() => {
        if (locations && locations.length > 0) {
            console.log("LOC", locations);
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