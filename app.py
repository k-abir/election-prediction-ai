# app.py
from flask import Flask, render_template
from us_map import create_us_map

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/us_map')
def us_map():
    img = create_us_map()
    return send_file(img, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)
