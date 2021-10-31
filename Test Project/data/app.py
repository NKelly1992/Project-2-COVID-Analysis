from flask import Flask, render_template
import pymongo

app = Flask(__name__)

#Set up Mongo Connnection
conn = "mongodb:///localhost:27017"
client = pymongo.MongoClient (conn)

#connect to mongo db and collections
db = client.vacc_data
covid = db.covid

@app.route("/")
def index():
    #statement that looks through the db

    #render an index.html template and pass in the data that you pulled from the database


if __name__ == "__main__":
    app.run(debug=True)
