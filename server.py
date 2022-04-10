from flask import Flask,render_template,jsonify
import psycopg2
import os
from flask_cors import CORS
from collections import defaultdict 

app=Flask(__name__)
CORS(app)

try:
    database_url=os.environ.get('DATABASE_URL').replace("postgres://", "postgresql://", 1)
    pg_conn=psycopg2.connect(database_url)
    pg_cur=pg_conn.cursor()

    @app.route('/')
    def fetch_all_groups():
        pg_cur.execute('SELECT * FROM performance1')
        rows=pg_cur.fetchall()
        print(rows)
        return jsonify(rows)

except:
    print('Error')


if __name__=='__main__':
    app.run(port=5000,debug=True)
