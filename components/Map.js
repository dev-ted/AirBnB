import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { HomeIcon } from "@heroicons/react/outline";

function Map({ places }) {
  const [selected, setSelected] = useState({});
  //turns the results into a list of coordinates
  const coordinates = places.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,

    width: "100%",
    height: "100%",
    zoom: 12,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/devted/ckt1b5j730uiy18qs481jczip"
      mapboxApiAccessToken= 'pk.eyJ1IjoiZGV2dGVkIiwiYSI6ImNraXNueTR4bTB6N3IzMG55d256cXBkNDQifQ.uoISpXCQdR1MLGHP_BAyHA'
      {...viewport}
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
    >
      {places.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetTop={-10}
            offsetLeft={-20}
          >
            <p
              role="img"
              aria-label="home-icon"
              onClick={() => setSelected(result)}
              className="cursor-pointer text-2xl animate-bounce"
            >
              <HomeIcon className="h-6 text-red-400" />
            </p>
          </Marker>
          {selected.long === result.long ? (
            <Popup className="rounded-full shadow-md"
            closeOnClick={true}
            onClose={() => setSelected({})}
            latitude = {result.lat}
            longitude = {result.long}
            >
                <div className="text-red-400 text-sm">
                {result.title}
                </div>
               </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
