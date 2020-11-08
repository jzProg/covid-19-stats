import React from 'react';
import PopupDetails from './PopupDetails';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

export default function Map (props) {
  return (
    <div className='mapDiv col-md-8'>
      <MapContainer center={[20.505, -0.09]}
                    zoom={3}
                    scrollWheelZoom={false}>
        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {props.countries.map(country =>
          <Marker key={country.country}
                  icon={new Icon({ iconUrl: './covid.png', iconSize: [30, 30]})}
                  position={[country.countryInfo.lat, country.countryInfo.long]}>
            <Popup>
              <PopupDetails info={country}/>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  )
}
