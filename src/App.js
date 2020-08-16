import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import "./App.css";
import * as data from "./restaurant.json";

function Map() {
  const [selectedRest, setSelectedRest] = useState(null);
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 47.66129, lng: -122.31313 }}
    >
      {data.features.map((rest) => (
        <Marker
          position={{ lat: rest.coordinates[0], lng: rest.coordinates[1] }}
          onClick={() => {
            setSelectedRest(rest);
          }}
        />
      ))}
      {selectedRest && (
        <InfoWindow
          position={{
            lat: selectedRest.coordinates[0],
            lng: selectedRest.coordinates[1],
          }}
          onCloseClick={() => setSelectedRest(null)}
        >
          <div>Restaurant details</div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAgYdjt-cd3GQmi8PDhQ_hq_S3ek9UHRbI`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
