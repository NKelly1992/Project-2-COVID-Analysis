Plotly.d3.json('/', function(rows) {
  function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
  }
  var data = rows.data

  var
      state = unpack(data, 'postal'),
      searches = unpack(data, 'searches')

  var data = [{
      type: "choroplethmapbox",
      name: "Searches",
      geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json",
      locations: state,
      z: searches,

      zmin: 2555,
      zmax: 98134,

      colorbar: { y: 0, yanchor: "bottom", title: { text: "Seaches", side: "right" } },
      colorscale: [
          [0, '#131f0c'],
          [1, '#bdfe88']
      ],
      autocolorscale: false,

  }];


  var layout = {
      scope: "usa",
      mapbox: { style: "dark", center: { lon: -95.712891, lat: 37.090240 }, zoom: 3 },
      width: 1200,
      height: 500,
      margin: { t: 0, b: 0 },

  }
  var config = { mapboxAccessToken: "pk.eyJ1IjoiZWdhZ2EiLCJhIjoiY2tmOG51MXY4MGR3NjJ5cnE4N3B2NTl0cCJ9.vVCAwSF-oh9ymZ8-pM-nBQ" };

  Plotly.newPlot('mymapDiv', data, layout, config);
});