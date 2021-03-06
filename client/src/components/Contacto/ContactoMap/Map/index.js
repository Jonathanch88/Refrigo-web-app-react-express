import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
const Map = (props) => {
  return (
    <GoogleMap defaultZoom={15}
    defaultCenter={{lat: -34.603784, lng: -58.381583}}/>
  )
}
export default withScriptjs(
  withGoogleMap(
    Map
  )
) 
