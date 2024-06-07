function predictResults() {
    var selectedPlatform = document.getElementById("socialMedia").value;
    
    // Prediction Logic
    var predictionResults = {};
    if (selectedPlatform === "reddit") {
        // Randomly generate prediction percentages for Reddit
        predictionResults = generateRandomPredictions();
    } else if (selectedPlatform === "facebook") {
        // Randomly generate prediction percentages for Facebook
        predictionResults = generateRandomPredictions();
    } else if (selectedPlatform === "twitter") {
        // Randomly generate prediction percentages for Twitter
        predictionResults = generateRandomPredictions();
    }

    // Display Prediction Results
    var predictionHTML = "<h2>Prediction Results</h2><p>" + 
                         "Based on " + selectedPlatform + ":</p>" +
                         "<p>Republican: " + predictionResults.republican + "%</p>" +
                         "<p>Democrat: " + predictionResults.democrat + "%</p>";
    document.getElementById("prediction").innerHTML = predictionHTML;

    // Assuming you have a dataset of US states and their percentages, you can populate the data table similarly
    var dataTable = "<h2>Data Table</h2><table><tr><th>State</th><th>Republican %</th><th>Democrat %</th></tr>";
    // Loop through your dataset and add rows to the table
    dataTable += "<tr><td>State 1</td><td>" + predictionResults.republican + "%</td><td>" + predictionResults.democrat + "%</td></tr>";
    dataTable += "<tr><td>State 2</td><td>" + predictionResults.republican + "%</td><td>" + predictionResults.democrat + "%</td></tr>";
    // Add more rows as needed
    dataTable += "</table>";
    
    document.getElementById("data").innerHTML = dataTable;
}

// Function to generate random prediction percentages
function generateRandomPredictions() {
    var republican = Math.floor(Math.random() * 100); // Random number between 0 and 100
    var democrat = 100 - republican; // Remaining percentage for democrat
    return { republican: republican, democrat: democrat };
}
