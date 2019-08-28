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
---

## Running the app
- Once you have cloned the repository and installed Android Studio, connect your physical device via USB.
- Navigate to the directory where the repo was cloned.
- Now open command prompt with administrator rights and install all dependencies mentioned above
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
react-native run-android
```
- The app should be up and running
