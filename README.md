# Automated Queue Management System
> An Automated queue management system for walk-in customers at a bank that maintains short queue lengths at all times

### Project Requirements
- Android Studio
- node version 8.11.3
- npm version 4.6.1

### Dependencies
- react version 16.8.6
- react-native version 0.60.5
- react-native-camera
- react-native-gesture-handler
- react-native-permissions
- react-navigation
- Python 2.6 or greater
- Python Libraries:
    -Flask
    -Mysql-connector
- Mysql 5.8 or higher


## Table of Contents
- [Installation](#installation)
- [Running the app](#running-the-app)

---

## Installation

### Install Node.js and npm
- You can install node.js from https://nodejs.org/en/download/ using the windows installer.
- NPM is intalled with node.js

### Verify if Node.js and npm are installed
- Open command prompt and perform the following commands
```shell
node -v
npm -v
```
- You should see the version of node and npm installed.

### Setup Android Studio
- Follow the installation instructions at https://facebook.github.io/react-native/docs/getting-started in the React Native CLI Quickstart section
- It is suggested to use a physical device as an emulator rather than a virtual device. Follow the instruction at https://facebook.github.io/react-native/docs/running-on-device to setup a physical device

### Clone
- Clone this repository to your local machine using https://github.com/harsh253/Synd-Innovate.git
- Open GitBash in the directory where you want to clone this repository then perform the following command
```shell
$ git clone https://github.com/harsh253/Synd-Innovate.git
```
## Running the app
- Once you have cloned the repository and installed Android Studio, connect your physical device via USB.Follow the instruction at https://facebook.github.io/react-native/docs/running-on-device to use your physical device as an emulator
- Now open a new command prompt window and type the following command to see if your device is connected.
```shell
adb devices
```
-It should show a device connected to your system. Also perform the following command to setup a reverse proxy to connect to the backend server later on
```shell
adb reverse tcp:8081 tcp:8081
```
- Open command prompt with administrator rights and navigate to the directory where the repo was cloned.
- Install all dependencies mentioned above
```shell
cd AndroidApp
npm install -g react-native-cli
npm install react-native-camera --save
npm install react-native-gesture-handler --save
npm install react-native-permissions --save
npm install react-navigation --save
```
- Once the dependencies have installed , you can run the app using
```shell
cd AndroidApp
react-native run-android
```
- The app should be up and running

---
## Steps to setup the backend server
- Install all the dependencies
- run the sql script in your mysql as 
```shell
    source path/sql_script.sql
```
- change the user and password for mysql in the api.py file in line # 11 and #12
- run the flask app by
```shell
python flask_app.py
```
