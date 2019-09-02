
from flask import Flask,jsonify
from flask import request
from api import *

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api/service',methods = ['POST','GET'])
def get_employee():
    req_data = request.get_json()
    print(req_data)
    id = req_data['id']
    service_type = req_data['service_type']
    response = Response()
    result = response.get_counter_info(service_type,id)
    return jsonify(result)




if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8081)
