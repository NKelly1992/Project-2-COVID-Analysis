
var trace1 = {
    x: top5.map(row => row.percentVaccinated),
    y: top5.map(row => row.stateabrev),
    text: top5.map (row => row.state),
    name: 'Top 5',
    type: 'bar',
    orientation: 'h',
    marker: {
        color: 'rgba(50,171, 96, 0.7)',
        line: {
          color: 'rgba(50,171,96,1.0)',
          width: 2
        }},
    transforms: [{
        type: 'sort',
        target: 'x',
        order: 'ascending'
      }, {
        type: 'filter',
        target: 'x',
        operation: '>',
        value: 1
      }]
};

var trace2 = {
    x: bottom5.map (row => row.percentVaccinated),
    y: bottom5.map (row => row.stateabrev),
    text: bottom5.map(row => row.state),
    name: 'Bottom 5',
    type: 'bar',
    marker: {
        color: 'rgba(200,64, 72, 0.7)',
        line: {
          color: 'rgba(200,64, 72,1.0)',
          width: 2
        }},
    orientation: 'h',
    transforms: [{
        type: 'sort',
        target: 'x',
        order: 'descending'
      }, {
        type: 'filter',
        target: 'x',
        operation: '>',
        value: 1
      }]
};

var data1 = [trace1];
var data2 = [trace2];

var layout = {
    title: 'Top 5 States',
    xaxis: {title: "Percent Vaccinated"},
    yaxis: {title: "States"},

};

var layout2 = {
    title: 'Bottom 5 States',
    xaxis: {title: "Percent Vaccinated"},
    yaxis: {title: "States"},
    color: "C84048"
};

Plotly.newPlot("plot1", data1, layout);
Plotly.newPlot("plot2", data2, layout2);

console.log(data1);
console.log(data2);
