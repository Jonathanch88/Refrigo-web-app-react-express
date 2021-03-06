import React from 'react';
import Map from './Map';
import credentials from '../../../credentials/credentials';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

const ContactoMap = (props) => {
  return (

    <div className="contenedor-direccion">
      <h3>Contactanos</h3>
      <span>Telefonos: <strong>11-222-333-44</strong></span>
      {<br></br>}
      <span>Email: <strong>FredFlintstone@gmail.com</strong></span>
      {<br></br>}
      <span>Direccion: P.Sherman, Calle Wallaby 42, Sydney</span>
      {<br></br>}
      <div className="container_googleMaps">
      </div>

      <React.Fragment>
        <Map
          googleMapURL={mapURL}
          containerElement={<div className="containerElement" />}
          mapElement={<div className="mapElement" />}
          loadingElement={<p>Cargando</p>}
        />

      </React.Fragment>
    </div >

  )
}

export default ContactoMap;