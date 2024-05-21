from pymongo import MongoClient
import gridfs

client = MongoClient('mongodb://localhost:27017/')
db = client['Spotify-DB'] 

audiofs = gridfs.GridFS(db)

def insert_audio(file_path, music_name):
    with open(file_path, 'rb') as f:
        audiofs.put(f, musicname=music_name)

insert_audio('audios\\NaaReady.mp3', 'Naa Ready')

