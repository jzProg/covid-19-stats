import React from 'react';

export default function TopCountries (props) {

  return (
    <div className='top-countries row'>
      <h4>Top 10 countries by today cases</h4>
      <div className='top-countries-text'>
        {props.dataUpdated && (
          <div>
           {props.data.map(country =>
             <div key={country.country}>{country.country}
               <span style={{ color: 'red' }}> {country.todayCases}</span>
             </div>)}
          </div>
        )}
      </div>
    </div>
  )
}
