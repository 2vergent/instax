# **InstaX : A wannabe cool social media site**
## **Prerequisites :**
### **1. Node.js :**
#### Download link : https://nodejs.org/en/download
### **2. MongoDB Compass :**
#### a) Download MongoDB Compass : https://downloads.mongodb.com/compass/mongodb-compass-1.39.2-win32-x64.exe
## **Get the code :**
### 1) Click `<> Code` and choose `Download ZIP`
#### _Note : If you have GIT installed, then clone the repository using command ```git clone https://github.com/2vergent/instax.git```_
### 2) Extract the ZIP by right-clicking the ZIP file and choose `Extract all`
#### _(Optional) Move the extracted contents of the ZIP file to an easily accessible location_
## **Initial code setup :**
### 1) Open Command Prompt by searching `CMD` in start-menu
### 2) Navigate to the folder, inside CMD, where you saved the extracted contents of the ZIP file
### 3) Type `cd instax-main\instax-main`
### 4) Type the following commands and press enter one after the other :
```
npm install
cd backend
npm install
```
### 5) Run MongoDB Compass and click `Connect` with the URL showing `mongodb://localhost:27017`
## **Run InstaX :**
### 1) Open CMD, navigate to the location of the code and type `npm start`
### 2) A browser window will open with the URL `localhost:3000/login`
### 3) Open a new CMD window, navigate to the location of the code and execute :
```
cd backend
npx nodemon index.js
```
### 4) If you see `Connected to Mongo Successfully!`, then you are all set to go
##
_And Voila! InstaX is up and running_
