from flask import jsonify,Flask,send_from_directory
from flask_cors import CORS,cross_origin
from dboperations import DatabaseOperate
app=Flask(__name__,static_folder='front_end/build',static_url_path='')
CORS(app)


@app.route('/fetch')
@cross_origin()
def fetch_all_groups():
    dbOp=DatabaseOperate()
    table1Rows=dbOp.query_table1()
    table2Rows=dbOp.query_table2()
    return jsonify({'per1':table1Rows,'per2':table2Rows})
    
@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder,'index.html')

if __name__=='__main__':
    # app.run()
    app.run(port=5000,debug=True)
