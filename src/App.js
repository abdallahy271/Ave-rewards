import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
/**import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";**/
import "./App.css";
import * as data from "./restaurant.json";
//import Scan from "./ScanPage";
//import About from "./AboutPage/AboutPage.js";
//import Browse from "./BrowsePage";
//import Contact from "./ContactUs";

function Map() {
  const [selectedRest, setSelectedRest] = useState(null);
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 47.6596, lng: -122.31344 }}
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
          <div>
            <h3>{selectedRest.name}</h3>
            <span>{selectedRest.details}</span>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <body>
      <div id="top" style={{ width: "100%" }}>
        ave rewards
      </div>

      <h2>Welcome Isaac! </h2>
      <h4>Find a place near me</h4>
      <div id="search">Search by name or type</div>
      <div style={{ width: "100vw", height: "100vh" }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAgYdjt-cd3GQmi8PDhQ_hq_S3ek9UHRbI`}
          loadingElement={<div style={{ height: "80%" }} />}
          containerElement={<div style={{ height: "80%" }} />}
          mapElement={<div style={{ height: "80%" }} />}
        />
      </div>

      <ul>
        <li>
          <a href="">Browse</a>
        </li>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Scan</a>
        </li>
      </ul>
    </body>
  );
}
