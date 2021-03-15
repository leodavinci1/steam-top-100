import React, { useState } from 'react';
import Chart from "react-apexcharts";
import jsonData from "../../data/top100.json";


const Home = () => {
  
const initialOptions = {
  plotOptions: {
    treemap: {
      distributed: true
    }
  },
  events: {
    click: function(event, chartContext, config) {
      console.log(chartContext);
    }
  }
}
  console.log(jsonData);
  const [options, setOptions] = useState(initialOptions);
  return (
    <div className="about-container">
      {/* <Chart
              options={options}
              series={[]}
              type="bar"
              width="500"
            /> */}
    </div>
  );
}

export default Home;
