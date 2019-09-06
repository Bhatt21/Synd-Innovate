
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
	id = req_data['id']
	service_type = req_data['service_type']
	response = Response()
	result = response.get_counter_info(id,service_type)
	return jsonify(result)
	
	
@app.route('/api/service/delete',methods = ['POST','GET'])
def remove_employee():
	req_data = request.get_json()	
	print(req_data)
	id = req_data['id']
	response = Response()
	result = response.remove_user(id)
	return jsonify(result)
	




if __name__ == '__main__':
	app.run(host='192.168.137.1',port=8080)
