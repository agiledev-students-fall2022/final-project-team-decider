import React, { useEffect, useRef } from 'react';
import '../App.css';
import './Canvas.css';
import { map, tileLayer, Browser } from 'leaflet';

import './MapDetail.css';

const MapDetail = ({
    mapIsReadyCallback,
  }) => {
    const mapContainer = useRef(null);
  
    useEffect(() => {
      const initialState = {
        lng: 11,
        lat: 49,
        zoom: 4,
      };
  
      const leafletMap = map(mapContainer.current).setView(
        [initialState.lat, initialState.lng],
        initialState.zoom
      );
  
      const APIKey = '5b82ca360a754cec8eb085096ff20a32';
      const isRetina = Browser.retina;
      var baseUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${APIKey}`;
      var retinaUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey=${APIKey}`;
  
      tileLayer(isRetina ? retinaUrl : baseUrl, {
        attribution:
          'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" rel="nofollow" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" rel="nofollow" target="_blank">© OpenStreetMap</a> contributors',
        maxZoom: 20,
        id: 'osm-bright',
      }).addTo(leafletMap);
  
      mapIsReadyCallback(leafletMap);
    }, [mapContainer.current]);
  
    return <div className="map-container" ref={mapContainer}></div>;
  };
  
  export default MapDetail;