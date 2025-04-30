import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({historicalData}) => {

const [data, setData] = useState([["Date", "Prices"]])

useEffect(() => {
    const dataCopy = [["Date", "Prices"]];
    const monthSet = new Set();
  
    if (historicalData.prices) {
      historicalData.prices.forEach((item) => {
        const date = new Date(item[0]);
        const monthKey = `${date.getFullYear()}-${date.getMonth()}`; // Unique for each month
  
        if (!monthSet.has(monthKey)) {
          monthSet.add(monthKey);
          const label = date.toLocaleDateString("en-US", { year: 'numeric', month: 'short' }); // e.g., "Apr 2024"
          dataCopy.push([label, item[1]]);
        }
      });
  
      setData(dataCopy);
    }
  }, [historicalData]);
  

  return (
    <Chart
    chartType='LineChart'
    data={data}
    height="100%"
    legendToggle
    />
  )
}

export default LineChart