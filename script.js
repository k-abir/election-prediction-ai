document.addEventListener('DOMContentLoaded', function() {
    const socialMediaSelect = document.getElementById('social-media');
    const generateResultsButton = document.getElementById('generate-results');
    const resultsContainer = document.getElementById('results-container');

    generateResultsButton.addEventListener('click', function() {
        const selectedPlatform = socialMediaSelect.value;
        let results;

        switch (selectedPlatform) {
            case 'reddit':
                results = "Results: Predominantly Democratic";
                break;
            case 'twitter':
                results = "Results: Mixed";
                break;
            case 'facebook':
                results = "Results: Predominantly Republican";
                break;
            default:
                results = "No data available";
        }

        resultsContainer.textContent = results;
    });

    // D3.js for drawing the US map
    const width = 960;
    const height = 600;

    const svg = d3.select("#us-map").append("svg")
        .attr("width", width)
        .attr("height", height);

    const projection = d3.geoAlbersUsa()
        .scale(1280)
        .translate([width / 2, height / 2]);

    const path = d3.geoPath()
        .projection(projection);

    d3.json("https://d3js.org/us-10m.v1.json").then(function(us) {
        svg.append("g")
            .attr("class", "counties")
            .selectAll("path")
            .data(topojson.feature(us, us.objects.counties).features)
            .enter().append("path")
            .attr("d", path);

        svg.append("path")
            .attr("class", "county-borders")
            .attr("d", path(topojson.mesh(us, us.objects.counties, function(a, b) { return a !== b; })));
    });
});
