# REST API and HTTP PROTOCOL FOR implementing CRUD OPERATIONS

# Project's objectives

phase 1:
- learn and implement REST API and HTTP protocol
- getting familiar with backend technologies like Node and Express
- getting familiar with persistency and basic querying using MongoDb and Mongoose
- using package management technologies like NPM 
- learn testing tools like Postman 
- all the while practicing version control with git

phase 2:
- using more complex data , for more complex querying 
- basic auth using jwt 
- basic CI 
- using containers with docker 


# Installation

Clone the repository:
```
git clone https://github.com/MaoriMalca/MaoriMalca/REST-API-MongoDB.git
```
Navigate to the project directory:
```
cd REST-API-MongoDB
```
Install dependencies:
```
npm install
```

# Set up MongoDB

Start your MongoDB server.

Configure environment:

1.  See `.env.example` file from 'example' folder.
2.  Create a new environment file by copying and pasting the example file. 
    ```
    cp .env.example .env
    ```
3.  Change the values of the file according the example file instructions.


# Usage

### Runnig the server:

start the sever:
```
npm start
```
If the server is running successfully, you will get the following output:

```
Server is running on port 5000
Database connected
``````

### Connect to the client API using Postman on port 5000.


# API endpoints:

#### Add new collection of user data to MongoDB:

```POST/api/create ```
		
Example (on Postman):	
```
POST http://localhost:5000/api/create
```
Required body params: 
 `name=[string]`
 `age=[number]`

It's also generating a unique ID for the new user.


#### Retrieve all the users data from MongoDB:

```GET/api/getAll ```
		
Example (on Postman):	
```
GET http://localhost:5000/api/getAll
```

#### Retrieve specific user data (based on ID) from MongoDB:

```GET/api/getByID/:id ```
		
Example (on Postman):	
```
GET http://localhost:5000/api/getByID/<id>
```

#### Update specific user data (based on ID) from MongoDB:

```PATCH/api/updateByID/:id ```
		
Example (on Postman):	
```
PATCH http://localhost:5000/api/updateByID/<id>
```
Required body params(new data): 
 `name=[string]`
 `age=[number]`

 
#### Delete specific user data (based on ID) from MongoDB:

```DELETE/api/deleteByID/:id ```
		
Example (on Postman):	
```
DELETE http://localhost:5000/api/deleteByID/<id>
```

# Additional Note:

1. Ensure that MongoDB is running before starting the server.
2. Customize the data model and routes according to your application's requirements.

