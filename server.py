from flask_talisman import Talisman
from flask import jsonify,Flask,send_from_directory
from flask_cors import CORS
from dboperations import DatabaseOperate
app=Flask(__name__,static_folder='front_end/build',static_url_path='')
Talisman(app, content_security_policy=None)
CORS(app)


@app.route('/fetch')
def fetch_all_groups():
    dbOp=DatabaseOperate()
    table1Rows=dbOp.query_table1()
    table2Rows=dbOp.query_table2()
    table3Rows=dbOp.query_table3()
    table4Rows=dbOp.query_table4()
    return jsonify({'per1':table1Rows,'per2':table2Rows,'per3':table3Rows,'per4':table4Rows})
    
@app.route('/')
def serve():
    return send_from_directory(app.static_folder,'index.html')

if __name__=='__main__':
    # app.run()
    app.run(host='0.0.0.0',debug=True)
