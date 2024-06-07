// Generate preset data based on social media selection
function generatePresetData() {
    const socialMedia = document.getElementById('socialMedia').value;
    let data;
    switch(socialMedia) {
        case 'reddit':
            data = "Reddit data preset: More Democratic";
            break;
        case 'twitter':
            data = "Twitter data preset: Mixed";
            break;
        case 'facebook':
            data = "Facebook data preset: More Republican";
            break;
    }
    alert(data);
}

// Create a US map using D3.js
const width = 960;
const height = 600;

const svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height);

const projection = d3.geoAlbersUsa()
    .scale(1000)
    .translate([width / 2, height / 2]);

const path = d3.geoPath()
    .projection(projection);

d3.json("https://d3js.org/us-10m.v1.json").then(us => {
    svg.append("g")
        .attr("class", "states")
      .selectAll("path")
      .data(topojson.feature(us, us.objects.states).features)
      .enter().append("path")
        .attr("d", path);

    svg.append("path")
        .attr("class", "state-borders")
        .attr("d", path(topojson.mesh(us, us.objects.states, (a, b) => a !== b)));
});
