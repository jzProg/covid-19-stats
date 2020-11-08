import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import Global from './Global';
import Footer from './Footer';
import PopupDetails from './PopupDetails';
import HistoryGraph from './HistoryGraph';
import '../App.css';

class CovidApp extends Component {

  componentDidMount() {
    Promise.all([fetch(this.state.endpoints.countries), fetch(this.state.endpoints.global), fetch(this.state.endpoints.historical)])
      .then(responses => Promise.all(responses.map(res => res.json()))
      .then(result => this.setState({ countries: result[0], global: result[1], historical: result[2], dataUpdated: true })));
  }

  state = {
    dataUpdated: false,
    showGraph: false,
    countries: [],
    global: {},
    historical: {},
    endpoints: {
      global: 'https://disease.sh/v3/covid-19/all',
      countries: 'https://disease.sh/v3/covid-19/countries',
      historical: 'https://disease.sh/v3/covid-19/historical/all?lastdays=30'
    },
  }

  render() {
    const { countries, global, historical, showGraph, dataUpdated } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Global globalStats={global}/>
          <HistoryGraph historyData={historical} dataUpdated={dataUpdated}/>
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
