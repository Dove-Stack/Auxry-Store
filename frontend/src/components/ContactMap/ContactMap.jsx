/* import React from "react";
import "./ContactMap.css";
import { GoogleMap, LoadScript, Marker } from "";

const location_center = {
  lat: 37.7749,
  lng: -122.4194,
};

const ContactMap = () => {
  const mapApiKey = import.meta.env.VITE_AUXRY_STORE_GOOGLE_MAPS_API_KEY;

  return (
    <LoadScript googleMapsApiKey={`${mapApiKey}`}>
      <GoogleMap center={location_center} zoom={13}>
        <Marker position={location_center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default ContactMap;
 */

