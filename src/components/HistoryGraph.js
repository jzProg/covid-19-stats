import React from 'react';
import { Chart } from 'react-charts';

export default function HistoryGraph (props) {

  const series = React.useMemo(
   () => ({
     showPoints: false
   }),
   []
 )

  const data = React.useMemo(
    () => Object.keys(props.historyData)
                .map((item, index) => {
                  return {
                          label: item,
                          data: Object.keys(props.historyData[item]).map(key => [key, props.historyData[item][key]])
                          }
                 })
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return (
    <div className='history-graph row'>
      <h4>Last 30 days(cases - recovered - deaths)</h4>
      <div className='chartDiv'>
        {props.dataUpdated && (
          <Chart data={data} series={series} axes={axes} tooltip />
        )}
      </div>
    </div>
  )
}
