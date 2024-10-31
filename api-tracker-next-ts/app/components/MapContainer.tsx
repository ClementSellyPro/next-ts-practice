import React from 'react';
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

function MapContainer() {
  return (
    <div className='absolute top-56 w-full h-96 -z-10 border'>
        MapContainer
    </div>
  )
}

export default MapContainer