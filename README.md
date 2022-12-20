# Createx - Online Courses (Backend Part)

Welcome to Createx. This is a fully functional website where you can buy online courses. The backend is written in Node JS/Express, the admin panel is in React and the UI framework is ANT Design, and the client side is written in NEXT JS.

## ADMIN PANEL AND CLIENT 

- [Admin Panel](https://github.com/ImTheDoctor/online_courses_admin)
- [Client](https://github.com/ImTheDoctor/online_courses-Frontend)

## Technologies

- [Express](https://expressjs.com/ru/)
- [MongoDB/Mongoose](https://www.mongodb.com/)
- [BCrypt](https://www.npmjs.com/package/bcrypt)
- [JWT](https://jwt.io/)
- [Multer](https://www.npmjs.com/package/multer)
- [Nodemailer](https://nodemailer.com/about/)

## USAGE

First you need to clone the repository 

```
$ git clone https://github.com/ImTheDoctor/online_courses-Backend.git
$ cd .. project
```

After cloning do install dependencies


```
$ npm install
```

Create `.env` file and write your tokens

```
PORT = Write your port

MONGO_URL = mongodb://localhost/your-db-connection

JWT_SECRET = Your secret key

CONTACT_MAIL = Contact mail
CONTACT_PASSWORD = and password from gmail(or what you use)
```

Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - In .env file update MONGODB_URL (See above how to do it)
- OR Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - In .env file update.

## Features

There is a login and registration (BCrypt & JWT token was used to encrypt the password)

- Login and Register routes
  - http://localhost:`PORT`/login
  - http://localhost:`PORT`/register

Nodemailer used for contacts(Works with GMail)

- Contacts
  - http://localhost:`PORT`/contact
  
CRUD operations for courses and teachers(Used multer for save images in uploads folder)

- Courses
  - http://localhost:`PORT`/courses

- Teachers
  - http://localhost:`PORT`/teachers



## Contacts

- [Henrik Hayrapetyan](https://www.linkedin.com/in/henrik-hayrapetyan/) — FullStack JS developer / Front-End developer