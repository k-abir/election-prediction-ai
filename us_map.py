# us_map.py
import matplotlib.pyplot as plt
import geopandas as gpd
from flask import Flask, send_file
import io

def create_us_map():
    # Load the US states shapefile
    us = gpd.read_file(gpd.datasets.get_path('naturalearth_lowres'))
    us = us[(us.continent == "North America") & (us.name != "Canada") & (us.name != "Mexico")]
    us = us.to_crs("EPSG:2163")

    # Plot the map
    fig, ax = plt.subplots(1, 1, figsize=(15, 10))
    us.boundary.plot(ax=ax)
    ax.set_title('US Map', fontsize=20)

    # Save the figure to a BytesIO object
    img = io.BytesIO()
    plt.savefig(img, format='png', bbox_inches='tight')
    img.seek(0)
    plt.close(fig)

    return img

app = Flask(__name__)

@app.route('/us_map')
def us_map():
    img = create_us_map()
    return send_file(img, mimetype='image/png')

if __name__ == "__main__":
    app.run(debug=True)
