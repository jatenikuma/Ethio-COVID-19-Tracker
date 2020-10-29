import React, { useState } from "react";
import TreatmentCenters from "./TreatmentCenters.json";
import ReactMapGl, { Marker, Popup } from "react-map-gl";

const CovidTreatmentCenters = () => {
  const [viewport, setViewPort] = useState({
    width: "100vw",
    height: "100vh",
    zoom: 4.2,
    latitude: 9.0107934,
    longitude: 40.7612525,
  });

  const [selectedCenter, setSelectedCenter] = useState(null);

  //https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle={"mapbox://styles/jateni/ckb714xl04bh01iq9v6by4nl1"}
        onViewportChange={(viewport) => {
          setViewPort(viewport);
        }}
      >
        {Object.keys(TreatmentCenters).map((element) => (
          <Marker
            key={element}
            latitude={parseInt(TreatmentCenters[element].latitude)}
            longitude={parseInt(TreatmentCenters[element].longitude)}
          >
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedCenter({
                  title: element,
                  latitude: parseInt(TreatmentCenters[element].latitude),
                  longitude: parseInt(TreatmentCenters[element].longitude),
                  description: TreatmentCenters[element].description,
                });
              }}
            >
              <img src="/placeholder.png" alt="pointer for treatment centers" />
            </button>
          </Marker>
        ))}
        {selectedCenter ? (
          <Popup
            latitude={selectedCenter.latitude}
            longitude={selectedCenter.longitude}
            onClose={() => {
              setSelectedCenter(null);
            }}
          >
            <div>
              <h3>{selectedCenter.title}</h3>
            </div>

            <p>{selectedCenter.description}</p>
          </Popup>
        ) : null}
      </ReactMapGl>
    </div>
  );
};

export default CovidTreatmentCenters;
