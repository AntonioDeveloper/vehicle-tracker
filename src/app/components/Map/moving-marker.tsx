import React, { useContext, useEffect, useState } from 'react';
import {
    AdvancedMarker,
    InfoWindow,
    useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import VehicleContext from '@/app/context/VehicleContext';
import MapMarker from './AdvancedMarker';
//import { LatLngLiteral } from '@vis.gl/react-google-maps';

interface LocationData {
    id: string | number;
    lat: number;
    lng: number
    // Outras propriedades da sua localização
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

export const MovingMarker = () => {
    const { locations } = useContext(VehicleContext);
    const [position, setPosition] = useState<LocationData[]>([]);

    useEffect(() => {
        if (locations && locations.length > 0) {
            const positionsArr = locations.map((loc: any, index: number) => ({
                lat: loc.lat,
                lng: loc.lng,
                id: index, // Ou algum ID único da sua data
            }));
            setPosition(positionsArr);
        } else {
            setPosition([]);
        }
    }, [locations]);

    console.log("POS", position);

    return (
        <>
            {position.map((item: LocationData) => (
                <MapMarker key={`${item.id}a`} position={item} />
            ))}
        </>
    );
};