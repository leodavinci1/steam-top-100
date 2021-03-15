import React from 'react';
import jsonData from "../../data/top100.json";



const Home = () => {
  const allValues = jsonData.map((item) => parseInt(item.currentPlayers.replace(/,/g, '')))
  const maxValue = allValues.reduce(function(a, b) {
    return Math.max(a, b);
  });

  const getPercentage = (current, maxValue) => {
    return ((parseInt(current.replace(/,/g, ''))/maxValue) * 100).toFixed(2);
  }
  let delay = 0;

  // const [options, setOptions] = useState(initialOptions);
  return (
    <div className="home-container">
      <div id="data">
      <div className="game-item">
              <div className="description-progress">
                This list will be updated with steam services every 5 minutes
              </div>
              <div className="description-current" style={{
                color: 'rgba(162, 245, 235, 0.2)',
                fontWeight: '100'
              }}>CURRENTLY PLAYING</div>
              <div className="description-peak" style={{
                color: 'rgba(162, 245, 235, 0.2)',
                fontWeight: '100'
              }}>PEAK TODAY</div>

            </div>
        {jsonData.map((item, idx) => {
          const max = getPercentage(item.currentPlayers, maxValue);
          delay = delay + 100;
          return <div className="game-item">
            <div className="place">{idx+1}</div>
              <div className="game-progress">
                <div className="progress" style={{
                  transition: `${1000 + delay}ms width ease`,
                  width: `${max}%`
                  
                }}></div>
              </div>
              <div className="game-name">
                <a href={item.link} target="_blank">
                {item.name}
                </a>
                </div>
              <div className="game-current">{item.currentPlayers}</div>
              <div className="game-peak">{item.peakPlayers}</div>

            </div>
        })}
      </div>
    </div>
  );
}

export default Home;
