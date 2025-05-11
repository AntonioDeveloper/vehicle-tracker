import React from 'react';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import { MovingMarker } from './moving-marker';

const GoogleMapsFrame = () => (
  <APIProvider apiKey="AIzaSyDnS_1Op_hQDJK9r5ZzEFCi6b5u_Rhc-F4">
    <Map
      mapId={'63a58f6a49d18719be1a5e52'}
      style={{width: 'auto', height: '100vh'}}
      defaultCenter={{lat: -22.494468, lng: -47.4222433}}
      defaultZoom={5}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
    {/* continously updated marker */}
    <MovingMarker />
  </APIProvider>
);

export default GoogleMapsFrame;
