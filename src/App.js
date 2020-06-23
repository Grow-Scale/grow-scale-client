import React, {useEffect, useState} from 'react';
import Histogram from 'react-chart-histogram';
import axios from 'axios';
import navpng from './navpng.png'
import './App.css';

function App() {
  const options = { fillColor: '#FFFFFF', strokeColor: '#4267B2' };
  const [labels, setLabels] = useState([])
  const [data, setData] = useState([])


  useEffect(async () => {
    const result = await axios(
      'https://grow-scale.herokuapp.com/getData',
    );
    console.log(result.data.complete_data)
    const Labels = []
    const Data = []
    Object(result.data.complete_data).forEach(function(item) {
      Labels.push(item.name)
      Data.push(item.no_users)
    })
    setLabels(Labels)
    setData(Data)

  }, []);

 
  return (
    <div className="App">
      <img src ={navpng} alt="" />
      <h4>Analytics</h4>
      <Histogram
          xLabels={labels}
          yValues={data}
          width='700'
          height='480'
          options={options}
      />
      <p>Context</p>
    </div>
  );
}

export default App;
