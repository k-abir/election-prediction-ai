function predictResults() {
    var selectedPlatform = document.getElementById("socialMedia").value;
    
    // Here you can write your prediction logic based on the selected social media platform
    // For demonstration purposes, let's assume we're displaying static data
    
    var predictionResults = "Prediction results based on " + selectedPlatform;
    document.getElementById("prediction").innerHTML = "<h2>Prediction Results</h2><p>" + predictionResults + "</p>";

    // Assuming you have a dataset of US states and their percentages, you can populate the data table similarly
    var dataTable = "<h2>Data Table</h2><table><tr><th>State</th><th>Republican %</th><th>Democrat %</th></tr>";
    // Loop through your dataset and add rows to the table
    dataTable += "<tr><td>State 1</td><td>40%</td><td>60%</td></tr>";
    dataTable += "<tr><td>State 2</td><td>45%</td><td>55%</td></tr>";
    // Add more rows as needed
    dataTable += "</table>";
    
    document.getElementById("data").innerHTML = dataTable;
}
