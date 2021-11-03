data = [
  {
  type: 'scatterpolar',
  r: [18958985, 61486935, 34664565, 31361205, 43802845, 18958985],
  theta: ['Illinois','California','Florida', 'New York', 'Texas', 'Illinois'],
  fill: 'toself',
  name: 'Total vaccines distributed'
  },
  {
  type: 'scatterpolar',
  r: [6897684, 24045250, 12756457, 12876661, 15368246, 6897684],
  theta: ['Illinois','California','Florida', 'New York', 'Texas', 'Illinois'],
  fill: 'toself',
  name: 'Total vaccinated'
  }
]

layout = {
  autosize: false,
  width: 800,
  height:800,
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 70000000]
    }
  }
}

Plotly.newPlot("myDiv", data, layout)
