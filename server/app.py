from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import os 
#from dotenv import load_dotenv

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
token = os.getenv("TOKEN_KEY")

#Movie API Request
@app.get('/trending_movies')
def search_movie():
    #token = os.getenv("TOKEN_KEY")
    #print("token",token)

    url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"

    headers = {
        "accept": "application/json",
        "Authorization": f"Bearer {token}"
    }
    response = requests.get(url, headers=headers)
    trending_movies = response.json()
    return jsonify({"movies" : trending_movies})

#Get Movies by Genre
@app.get('/movieGenre/<string:genre_id>') 
def movie_genre(genre_id:str):
    print("butttt")

    print("Data", genre_id)
    url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"


    
    headers = {
        "accept": "application/json",
        "Authorization": f"Bearer {token}"
    }
    response = requests.get(url+"&with+genres="+genre_id, headers=headers)
    #print("YAYYYYYYYY",response.text)
    return jsonify({'movie_genre': response.json()})



@app.route("/")
def index():
    return "MovieNight"

if __name__ == "__main__":
    app.run(port=5555, debug=True)