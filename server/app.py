from flask import Flask, jsonify
from flask_cors import CORS
import requests
import os 

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_token = os.getenv("TOKEN_KEY")


#Movie API Request
@app.get('/trending_movies')
def search_movie():
    token = os.getenv("TOKEN_KEY")

    url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"

    headers = {
        "accept": "application/json",
        "Authorization": f"Bearer {token}"
    }
    response = requests.get(url, headers=headers)
    trending_movies = response.json()
    return jsonify({"movies" : trending_movies})

    # if response.status_code == 200:
    #     return response.json()
    # else: 
    #     return {"error": f"Failed to fetch data. Status code: {response.status_code}"}


@app.route("/")
def index():
    return "MovieNight"

if __name__ == "__main__":
    app.run(port=5555, debug=True)