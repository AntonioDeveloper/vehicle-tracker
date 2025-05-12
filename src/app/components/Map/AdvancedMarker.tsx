import React, { useState } from 'react';
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';

interface LocationData {
  id: string | number;
  lat: number;
  lng: number
  // Outras propriedades da sua localização
}

interface MapMarkerProps {
  position: LocationData;
}

export default function MapMarker(props: MapMarkerProps) {
    const [infowindowOpen, setInfowindowOpen] = useState(false);
    const [markerRef, marker] = useAdvancedMarkerRef();

    const handleMarkerClick = () => {
        setInfowindowOpen(true);
    };

    return (
        <>
            <AdvancedMarker
                ref={markerRef}
                position={props.position}
                onClick={handleMarkerClick}
            />
            {infowindowOpen && (
                <InfoWindow
                    anchor={marker}
                    maxWidth={200}
                    onCloseClick={() => setInfowindowOpen(false)}
                >
                    This is an example for the{' '}
                    <code style={{ whiteSpace: 'nowrap' }}>&lt;AdvancedMarker /&gt;</code>{' '}
                    combined with an Infowindow.
                </InfoWindow>
            )}
        </>
    );
};
