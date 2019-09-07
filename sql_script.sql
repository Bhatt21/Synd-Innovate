CREATE DATABASE user_info;
USE user_info;
CREATE TABLE counter1(id int,time_in datetime,primary key(id));
CREATE TABLE counter2(id int,time_in datetime,primary key(id));
CREATE TABLE UserInfo(id int,ticket_id varchar(256),counter_no int,agent_name text,service text,reporting_time datetime,primary key(id));
