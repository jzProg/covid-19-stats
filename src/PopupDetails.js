import React, { Component } from 'react';

class PopupDetails extends Component {

  state = {
    countryInfoMapping: [
      'population',
      'cases',
      'deaths',
      'recovered',
    ]
  }

  getDateString = (millis) => {
    const date = new Date(millis);
    return `${date.toDateString()} ${date.toLocaleTimeString()}`
  }

  render() {
    const { info } = this.props;

    return (
      <div className='popupHeader'>
        <img alt='country flag' style={{ borderRadius: '20px' }} src={ info.countryInfo.flag } width='20px' height='20px'/>
        <h3><b>{ info.country }</b></h3>
        { this.state.countryInfoMapping.map(item => <span><b>{item}</b> { info[item] }<br/></span>)}
        <i style={{ fontSize: '10px', color: 'gray' }}>updated: { this.getDateString(info.updated) }</i>
      </div>
    )
  }
}

export default PopupDetails;
