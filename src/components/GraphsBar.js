import React from 'react';
import HistoryGraph from './HistoryGraph';
import TopCountries from './TopCountries';

export default function GraphsBar (props) {

  const { historical, dataUpdated, countries } = props;

  return (
    <div className='graphsBar col-md-4'>
      <HistoryGraph historyData={historical}
                    dataUpdated={dataUpdated}/>
      <TopCountries data={countries}
                    dataUpdated={dataUpdated}/>
    </div>
  )
}
