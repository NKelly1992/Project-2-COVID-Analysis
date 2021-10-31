var top5 = [{
  state: 'Connecticut', stateabrev: 'CT', TotalPopulation: 3575074.0, TotalLaborForce: 1940825.0, TotalUnemployed: 116456.0, TotalPoverty: 344146.0, StateNumber: 9, povertyrate: 9.626262281563962, UnemploymentRate: 6.000334909123698, TotalVaccinesDistributed: 5979585, TotalVaccinesAdministered: 5310937, TotalVaccinated: 2510279, percentVaccinated: 70.4, BoostersAdministered: 186046, AdditionalDosesPct: 7.4},
  {state: 'Maine', stateabrev: 'ME', TotalPopulation: 1335492.0, TotalLaborForce: 701270.0, TotalUnemployed: 28922.0, TotalPoverty: 153131.0, StateNumber: 23, PovertyRate: 11.466261123241472, UnemploymentRate: 4.124231750966104, TotalVaccinesDistributed: 2302770, TotalVaccinesAdministered: 1919012, TotalVaccinated: 942546, percentVaccinated: 70.1, BoostersAdministered: 68073, AdditionalDosesPct: 7.2},
  {state: 'Massachusetts', stateabrev: 'MA', TotalPopulation: 6850553.0, TotalLaborForce: 3800931.0, TotalUnemployed: 183355.0, TotalPoverty: 680962.0, StateNumber: 25, PovertyRate: 9.940248619345036, UnemploymentRate: 4.823949711268107, TotalVaccinesDistributed: 11646150, TotalVaccinesAdministered: 10260823, TotalVaccinated: 4780386, percentVaccinated: 69.4, BoostersAdministered: 320061, AdditionalDosesPct: 6.7},
  {state:'New Hampshire', stateabrev: 'NH', TotalPopulation: 1348124.0, TotalLaborForce: 759081.0, TotalUnemployed: 27430.0, TotalPoverty: 98682.0, StateNumber: 33, PovertyRate: 7.319949796902955, UnemploymentRate: 3.6135801054169447, TotalVaccinesDistributed: 2265530, TotalVaccinesAdministered: 1884965, TotalVaccinated: 852140, percentVaccinated: 62.7, BoostersAdministered: 11969, AdditionalDosesPct: 1.4},
  {state: 'Rhode Island', stateabrev: 'RI', TotalPopulation: 1057231.0, TotalLaborForce: 567926.0, TotalUnemployed: 30455.0, TotalPoverty: 125826.0, StateNumber: 44, PovertyRate: 11.901467134429469, UnemploymentRate: 5.362494409482926, TotalVaccinesDistributed: 1794565, TotalVaccinesAdministered: 1536391, TotalVaccinated: 746384, percentVaccinated: 70.5, BoostersAdministered: 54771, AdditionalDosesPct: 7.3},
  {state: 'Vermont', stateabrev: 'VT', TotalPopulation: 624313.0, TotalLaborForce: 341932.0, TotalUnemployed: 12323.0, TotalPoverty: 65652.0, StateNumber: 50, PovertyRate: 10.51587905425644, UnemploymentRate: 3.6039329457319, TotalVaccinesDistributed: 1128950, TotalVaccinesAdministered: 956952, TotalVaccinated: 442528, percentVaccinated: 70.9, BoostersAdministered: 46323, AdditionalDosesPct: 10.5}];
  
var bottom5 = [{
  state: 'Alabama', stateabrev: 'AL', TotalPopulation: 4876250.0, TotalLaborForce: 2242785.0, TotalUnemployed: 132095.0, TotalPoverty: 795989.0, StateNumber: 1, povertyrate: 16.323793899000258, UnemploymentRate: 5.889775435451905, TotalVaccinesDistributed: 7058840, TotalVaccinesAdministered: 4773728, TotalVaccinated: 2177980, percentVaccinated: 44.4, BoostersAdministered: 154781, AdditionalDosesPct: 7.1},
  {state: 'Idaho', stateabrev: 'ID', TotalPopulation: 1717750.0, TotalLaborForce: 832286.0, TotalUnemployed: 35879.0, TotalPoverty: 221256.0, StateNumber: 16, PovertyRate: 12.880570513753456, UnemploymentRate: 4.310897936526627, TotalVaccinesDistributed: 2383680, TotalVaccinesAdministered: 1681655, TotalVaccinated: 777294, percentVaccinated: 43.5, BoostersAdministered: 77695, AdditionalDosesPct: 10.0},
  {state: 'Mississippi', stateabrev: 'MS', TotalPopulation: 2984418.0, TotalLaborForce: 1346678.0, TotalUnemployed: 99733.0, TotalPoverty: 585786.0, StateNumber: 28, PovertyRate: 19.628148603848388, UnemploymentRate: 7.40585351509418, TotalVaccinesDistributed: 4009685, TotalVaccinesAdministered: 2930327, TotalVaccinated: 1348772, percentVaccinated: 45.3, BoostersAdministered: 94057, AdditionalDosesPct: 7.0},
  {state: 'Wyoming', stateabrev: 'WY', TotalPopulation: 581024.0, TotalLaborForce: 305004.0, TotalUnemployed: 13544.0, TotalPoverty: 62257.0, StateNumber: 56, PovertyRate: 10.715047915404528, UnemploymentRate: 4.440597500360651, TotalVaccinesDistributed: 716045, TotalVaccinesAdministered: 557481, TotalVaccinated: 251741, percentVaccinated: 43.5, BoostersAdministered: 23369, AdditionalDosesPct: 9.3},
  {state: 'West Virginia', stateabrev: 'WV', TotalPopulation: 1817305.0, TotalLaborForce: 794126.0, TotalUnemployed: 51910.0, TotalPoverty: 310044.0, StateNumber: 54, PovertyRate: 17.06064749725555, UnemploymentRate: 6.536746057930354, TotalVaccinesDistributed: 3121575, TotalVaccinesAdministered: 1587090, TotalVaccinated: 734280, percentVaccinated: 41.0, BoostersAdministered: 41938, AdditionalDosesPct: 5.7}];
  
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
