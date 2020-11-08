import React, { Component } from 'react';
import Global from './Global';
import Footer from './Footer';
import GraphsBar from './GraphsBar';
import Map from './Map';
import '../App.css';

class CovidApp extends Component {

  componentDidMount() {
    Promise.all([fetch(this.state.endpoints.countries), fetch(this.state.endpoints.global), fetch(this.state.endpoints.historical)])
      .then(responses => Promise.all(responses.map(res => res.json()))
      .then(result => this.setState({ countries: result[0], global: result[1], historical: result[2], dataUpdated: true })));
  }

  state = {
    dataUpdated: false,
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
    const { countries, global, historical, dataUpdated } = this.state;

    return (
      <div className='App'>
        <header className='App-header container'>
          <Global globalStats={global}/>
          <div className='row'>
            <GraphsBar historical={historical}
                       countries={countries.sort((a, b) => b.todayCases - a.todayCases).filter((item, index) => index < 10)}
                       dataUpdated={dataUpdated}/>
            <Map countries={countries}/>
          </div>
          <Footer/>
        </header>
      </div>
    );
  }
}

export default CovidApp;
