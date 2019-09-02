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

    def get_counter_info(self,service_type,id):
        query = 'select count(*) from counter1'
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        counter1 = result[0][0]
        query = 'select count(*) from counter2'
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        counter2 = result[0][0]

        if counter2 >= counter1:
            query = "Insert into counter1 (id,time_in) values (%s,%s)"
            time_in = datetime.now()
            values = [id,time_in]
            ticket_id = uuid.uuid1()
            self.cursor.execute(query,values)
            dict = {}
            dict["Name of person"] = "Hindustani Bhau"
            dict["pic of person"] = "Nikal Lavde"
            delta = 5 * counter2
            dict["ETA"] = datetime.now() + timedelta(minutes = delta)
            dict["Counter no"] = 1
            dict["ticket_id"] = ticket_id
            mydb.commit()
            return dict
        else:
            query = "Insert into counter2 (id,time_in) values (%s,%s)"
            time_in = datetime.now()
            ticket_id = uuid.uuid1()
            values = [id,time_in]
            self.cursor.execute(query,values)
            dict = {}
            dict["Name of person"] = "Gucci Khan"
            dict["pic of person"] = "Gucci Pucci"
            delta = 5 * counter1
            dict["ETA"] = datetime.now() + timedelta(minutes = delta)
            dict["Counter no"] = 2
            mydb.commit()
            return dict
