import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import Global from './Global';
import Footer from './Footer';
import PopupDetails from './PopupDetails';
import './App.css';

class CovidApp extends Component {

  componentDidMount() {
    Promise.all([fetch(this.state.endpoints.countries), fetch(this.state.endpoints.global)])
      .then(responses => Promise.all(responses.map(res => res.json()))
      .then(result => this.setState({ countries: result[0], global: result[1] })));
  }

  state = {
    countries: [],
    global: {},
    endpoints: {
      global: 'https://disease.sh/v3/covid-19/all',
      countries: 'https://disease.sh/v3/covid-19/countries'
    },
  }

  render() {
    const { countries, global } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Global globalStats={global}/>
          <MapContainer center={[20.505, -0.09]}
                        zoom={3}
                        scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {countries.map(country =>
              <Marker key={country.country}
                      icon={new Icon({ iconUrl: './covid.png', iconSize: [30, 30]})}
                      position={[country.countryInfo.lat, country.countryInfo.long]}>
                <Popup>
                  <PopupDetails info={country}/>
                </Popup>
              </Marker>
            )}
          </MapContainer>
         <Footer/>
        </header>
      </div>
    );
  }
}

export default CovidApp;
