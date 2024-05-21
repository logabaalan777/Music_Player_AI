from flask import Flask, request, jsonify
import pandas as pd
import pickle
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

with open('my_data.pkl', 'rb') as f:
    df = pickle.load(f)

def get_recommendations(song_name, num_recommendations=4):
    
    matching_song = df[df['song_name'] == song_name]

    if matching_song.empty:
        return []

    matching_artist = matching_song.iloc[0]['singer']

    filtered_songs = df[df['singer'] != matching_artist]

    unique_songs = filtered_songs.drop_duplicates(subset=['song_name'])

    recommendations = unique_songs.sample(n=num_recommendations, random_state=42)
    return recommendations[['song_name', 'singer']].to_dict(orient='records')

@app.route('/api/recommend', methods=['POST'])
def recommend():
    data = request.json
    song_name = data.get('songName')

    # if not song_name:
    #     return jsonify({'error': 'Song name is required'}), 400

    recommendations = get_recommendations(song_name)

    if not recommendations:
        return jsonify({'error': 'No recommendations found'}), 404

    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)
