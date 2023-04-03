import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import 'gridstack/dist/gridstack.min.css';
import './App.css';
import './litegride.css';
import { GridStack } from 'gridstack';
import Tema from './assets/img/tema.jpg';
import { useResizeDetector } from 'react-resize-detector';

const GridItem = ({ w = "3", h = "2", type }) => {
  const { width, height, ref } = useResizeDetector();
  const getOptions = (type) => ({
    chart: {
      type,
      height: height,
      width: width
    },
    title: {
      text: "Gráfico",
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
      },
      {
        data: [2, 7, 0, 4, 6, 2],
      },
    ],
  });
  return (
    <div className="grid-stack-item" gs-w={w} gs-h={h}>
      <div className="grid-stack-item-content" ref={ref} >
      <HighchartsReact highcharts={Highcharts} options={getOptions(type)} />
      </div>
    </div>
  );
}

function App() {

  useEffect(() => {
    GridStack.init();
  }, []);

  return (
    <div className="App" >
      <img className="App-logo" src={Tema} />
      <div className="grid-stack" >
        <GridItem type = "line"/>
        <GridItem type = "spline"/>
        <GridItem type = "area"/>
        <GridItem type = "areaspline"/>
        <GridItem type = "column"/>
        <GridItem type = "bar"/>
        <GridItem type = "pie"/>
        <GridItem type = "scatter"/>

      </div>
    </div>
  );
}

export default App;
