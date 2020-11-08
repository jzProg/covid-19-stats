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
      <div className='row'>
        <div className='appLogo col-md-1'>
          <img alt='siteLogo' src='./covid.png' width='35px' height='35px'/>
          COVID-19
        </div>
        {this.state.globalMapping.map(item =>
          <div className='globalElement col-md-3' key={item.key}>
           { item.displayText }
            <span style={{ color: item.isPositive ? 'green' : 'red'}}> { this.props.globalStats[item.key] }</span>
          </div>
        )}
      </div>
    )
  }
}

export default Global;
