from flask import Flask,jsonify, send_from_directory
import psycopg2
import os
from flask_cors import CORS

app=Flask(__name__,static_folder='front_end/build',static_url_path='')
CORS(app)

try:
    database_url=os.environ.get('DATABASE_URL').replace("postgres://", "postgresql://", 1)
    pg_conn=psycopg2.connect(database_url)
    pg_cur=pg_conn.cursor()
except:
    print('Error')

@app.route('/')
def fetch_all_groups():
    pg_cur.execute('SELECT * FROM qdscraper_1')
    rows=pg_cur.fetchall()
    return jsonify(rows)
@app.route('/')
def serve():
    return send_from_directory(app.static_folder,'index.html')




if __name__=='__main__':
    app.run()
