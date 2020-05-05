var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter',
  line: {
    color: '#367de0'
  }
};

var trace2 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: 'scatter',
  line: {
    color: '#709fe0'
  }
};

var data = [trace1, trace2];

var layout = {
  paper_bgcolor: 'fcfcfd7a',
  plot_bgcolor: 'fcfcfd7a',
  xaxis: {
    showgrid:false,
    showline:true
  },
  yaxis: {
    showgrid:false,
    showline:true
  },
  showlegend:false
  
};
  
Plotly.newPlot('myDiv', data, layout);
  
Plotly.newPlot('myDiv2', data, layout);