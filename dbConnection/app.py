from flask import request
import flask
import json
from flask_cors import CORS
from time import sleep
import threading
import psycopg2
from werkzeug.serving import make_server
import os

ipToNameMap = {
        "10.168.4.110" : "First Active DB - DECC",
        "10.182.153.175" : "Second Active DB - AWS"
    }
server_url = "10.168.4.110"

started = False

class ServerThread(threading.Thread):

    def __init__(self, app):
        threading.Thread.__init__(self)
        self.server = make_server('127.0.0.1', 5001, app)
        self.ctx = app.app_context()
        self.ctx.push()

    def run(self):
        self.server.serve_forever()

    def shutdown(self):
        self.server.shutdown()

def start_server():
    global server_url, server
    connection = psycopg2.connect(user="testuser",
                                    password="test@123",
                                    host=f"{server_url}",
                                    port="5433",
                                    database="testdb")

    cursor = connection.cursor()
    app = flask.Flask(__name__)

    CORS(app)
    # App routes defined here
    @app.route("/personadd", methods=['POST'])
    def personadd():
        data = json.loads(request.data.decode("utf-8"))
        print(data)
        fname = data.get("fname")
        lname = data.get("lname")
        age = data.get("age")
        cursor.execute(f"INSERT INTO PEOPLE(fname, lname, age) VALUES('{fname}', '{lname}', '{age}');")
        connection.commit()
        return "Data added to the DB"

    @app.route("/getpeople", methods=['GET'])
    def getpeople():
        cursor.execute(f"SELECT * FROM PEOPLE;")
        entries = cursor.fetchall()
        print(entries)
        results = [
            {
                "fname": entry[0],
                "lname": entry[1],
                "age": entry[2]
            } for entry in entries]
        #print(results)
        return {"person": results, "server_url" : server_url}

    server = ServerThread(app)
    server.start()

def stop_server():
    global server
    server.shutdown()

def check_poll():
    global server_url
    global server
    global started
    print("polling started")
    while True:

        response = os.system("ping -c 1 " + server_url)
        if response == 0:
            print(f"Current Active Service : {ipToNameMap[server_url]}")
            if not started:
                start_server()
                started = True
        else:
            print("\n\n\n\n\n")
            print("================================")
            print("Failover, switching to Next available cloud !")
            print("================================")
            print("\n\n\n\n\n")
            server_url = "10.182.153.175"
            sleep(2)
            if started:
                stop_server()
                started = False
        sleep(2)

t1 = threading.Thread(target=check_poll)

if __name__ == '__main__':
    #app.run(host='0.0.0.0', port=81, debug=True)
    t1.start()