from flask import Flask, render_template, request, flash
from flask_sqlalchemy import SQLAlchemy
import urllib
import json
from flask_cors import CORS

password= urllib.parse.quote_plus('!@#!@#1qaz2wsx')
app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://testbed_admin:{password}@10.182.153.175/testbed_management'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = 'hi'

db = SQLAlchemy(app)

class People(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(80), nullable=False)
    lname = db.Column(db.String(120), nullable=False)
    age = db.Column(db.String(3), nullable=False)


    def __init__(self, fname, lname, age):
        self.fname = fname
        self.lname = lname
        self.age = age
        
@app.route("/personadd", methods=['POST'])
def personadd():
    data = json.loads(request.data.decode("utf-8"))
    print(data)
    fname = data.get("fname")
    lname = data.get("lname")
    age = data.get("age")
    entry = People(fname, lname, age)
    db.session.add(entry)
    db.session.commit()

    return "Data added to the DB"

@app.route("/getpeople", methods=['GET'])
def getpeople():
    entry = []
    data = People.query.all()
    for person in data:
        entry.append(person.__dict__)
        print(person.__dict__)
    return entry

if __name__ == '__main__':
    db.create_all()
    app.run(host='0.0.0.0', port=81, debug=True)

