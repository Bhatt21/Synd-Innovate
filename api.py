import mysql.connector
import uuid
from datetime import datetime, timedelta




##
mydb = mysql.connector.connect(
	host="localhost",
	user="root",
	passwd="Password@123",
	database = "user_info"
)

class Response:
	def __init__(self):
		self.mydb = mydb
		self.cursor = mydb.cursor()
		
	def check_user_exists(self,id):
		query = "Select exists(select 1 from UserInfo where id = " + str(id) + ")"
		self.cursor.execute(query)
		result = self.cursor.fetchall()
		if result[0][0] == 0:
			return False
		else:
			return True
			
	def get_counter_info(self,id,service_type="n/a"):
		if self.check_user_exists(id):
			query = "Select * from UserInfo where id =" + str(id)
			self.cursor.execute(query)
			result = self.cursor.fetchall()
			dict = {}
			dict["ticketId"] = result[0][1]
			dict["agentName"] = result[0][3]
			dict["counterNo"] = result[0][2]
			dict["service"] = result[0][4]
			dict["reportingTime"] = result[0][5]
			return dict
			
		else:	
			query = 'select count(*) from counter1'
			self.cursor.execute(query)
			result = self.cursor.fetchall()
			counter1 = result[0][0]
			query = 'select count(*) from counter2'
			self.cursor.execute(query)
			result = self.cursor.fetchall()
			counter2 = result[0][0]

			if counter2 >= counter1:
				time_in = datetime.now()
				if counter1 > 0:
					sql = "select time_in from counter1 order by date desc"
					self.cursor.execute(sql)
					result = self.cursor.fetchall()
					time_in = result[0]
					delta = 5 
					time_in =  time_in + timedelta(minutes = delta) 
				else:
					time_in = time_in
				query = "Insert into counter1 (id,time_in) values (%s,%s)"
				#time_in = datetime.now()
				values = [id,time_in]
				ticket_id = uuid.uuid1()
				ticket_id = str(ticket_id)
				ticket_id = str(id) + ticket_id[0:-28]
				self.cursor.execute(query,values)
				dict = {}
				dict["agentName"] = "Ishir Chatnani"
				dict["pic of person"] = "jpeg"
				delta = 5 * counter1
				dict["reportingTime"] = time_in.strftime("%H:%M:%S")
				dict["counterNo"] = 1
				dict["ticketId"] = ticket_id
				dict["service"] = service_type
				sql = "Insert into UserInfo (id,ticket_id,counter_no,agent_name,service,reporting_time) Values \
				(%s,%s,%s,%s,%s,%s)"
				vals = [id,str(ticket_id),1,"Ishir Chatnani",service_type,dict["reportingTime"]]
				self.cursor.execute(sql,vals)
				mydb.commit()
				return dict
			else:   
				time_in = datetime.now()
				if counter2 > 0:
					sql = "select time_in from counter2 order by date desc"
					self.cursor.execute(sql)
					result = self.cursor.fetchall()
					time_in = result[0]
					delta = 5 
					time_in =  time_in + timedelta(minutes = delta) 
				else:
					time_in = time_in
				query = "Insert into counter2 (id,time_in) values (%s,%s)"
				#time_in = datetime.now()
				ticket_id = uuid.uuid1()
				ticket_id = str(ticket_id)
				ticket_id = str(id) + ticket_id[0:-28]
				values = [id,time_in]
				self.cursor.execute(query,values)
				dict = {}
				dict["agentName"] = "Kanishka Maheshwari"
				dict["pic of person"] = "Jpeg"
				delta = 5 * counter2
				dict["reportingTime"] = time_in.strftime("%H:%M:%S")
				dict["counterNo"] = 2
				dict["ticketId"] = ticket_id
				dict["service"] = service_type
				sql = "Insert into UserInfo (id,ticket_id,counter_no,agent_name,service,reporting_time) Values \
				(%s,%s,%s,%s,%s,%s)"
				vals = [id,str(ticket_id),2,"Kanishka Maheshwari",service_type,dict["reportingTime"]]
				self.cursor.execute(sql,vals)
				mydb.commit()
				return dict
				
	def remove_user(self,id):
		query = "Select * from UserInfo where id =" + str(id)
		self.cursor.execute(query)
		result = self.cursor.fetchall()
		counter_no = result[0][2]
		query = "delete from UserInfo where id = " + str(id)
		self.cursor.execute(query)
		query = "Delete from counter" + str(counter_no) + " where id =" + str(id)
		self.cursor.execute(query)
		mydb.commit()
		return {}
		
		
		
