import React, { Component } from 'react';

class Global extends Component {

  state = {
    globalMapping: [
      { key: 'cases', displayText:'Cases', isPositive: false },
      { key: 'deaths', displayText:'Deaths', isPositive: false },
      { key: 'critical', displayText:'Critical', isPositive: false },
      { key: 'affectedCountries', displayText:'Affected Countries', isPositive: false },
      { key: 'tests', displayText:'Tests', isPositive: true },
      { key: 'recovered', displayText:'Recovered', isPositive: true },
    ]
  }

  render() {
    return (
      <div className='globalDiv'>
        <div className='appLogo'>
          <img alt='siteLogo' src='./covid.png' width='35px' height='35px'/>
          COVID-19
        </div>
        {this.state.globalMapping.map(item =>
          <div className='globalElement'>
           <span style={{ color: item.isPositive ? 'green' : 'red'}}>{ item.displayText }: </span>
            { this.props.globalStats[item.key] }
          </div>
        )}
      </div>
    )
  }
}

export default Global;
