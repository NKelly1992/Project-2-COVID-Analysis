from flask import Flask, jsonify, render_template
from flask_pymongo import PyMongo

app = Flask(__name__)

#Set up Mongo Connnection
mongo = PyMongo(app, uri="mongodb://127.0.0.1:27017/vaccinationDB")


@app.route("/")
def index():

    #statement that looks through the db
    covid_data = list(mongo.db.statevacc.find({}, {'_id': False}))
    print(covid_data)
    # covid_data = [{'hello': 'hey'}]
    #render an index.html template and pass in the data that you pulled from the database
    return render_template('index.html', covid_data=covid_data)

@app.route("/returnData")
def returnData():
    covid_data = mongo.db.statevacc.find({}, {'_id': False})
    return jsonify(covid_data)

if __name__ == "__main__":
    app.run()