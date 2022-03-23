const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const libraryController = require('./controllers/libraryController.js');
const classController = require('./controllers/classController.js');
const studentController = require('./controllers/studentController.js');
const teacherController = require('./controllers/teacherController.js');

const app = express();
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 5000;

const db = process.env.DB_URL;
const username = process.env.USER_NAME;
const password = process.env.USER_PASSWORD;

//connecting to online db  
mongoose.connect( db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    })
    .then(() => {
     console.log("Connected to MongoDB");
    })
   .catch((err) => {
       console.log(err);

    });

     
     app.get('/', (req,res)=>{
       res.send('Welcome')
      })

    //library routes
    app.post('/library', libraryController.addBook);
    app.get('/library', libraryController.getAllBooks);
    app.get('/library/:Id', libraryController.getBookById);
    app.delete('/library/:Id', libraryController.deleteBookById);


   //class routes
   
    app.post('/class', classController.createClass);
    app.get('/class',  classController.getClasses);
    app.get('/class/:Id', classController.getClassById);
    app.delete('/class/:Id', classController.deleteClassById);

    //student routes
    app.post('/student', studentController.addStudent);
    app.get('/student',  studentController.allStudents);
    app.get('/student/:Id', studentController.getStudentById);
    app.delete('/student/:Id', studentController.deleteStudentById);

    //teachers route
    app.post('/teacher', teacherController.addTeacher);
    app.get('/teacher',  teacherController.allTeachers);
    app.get('/teacher/:Id', teacherController.getTeacherById);
    app.delete('/teacher/:Id', teacherController.deleteTeacherById);

    
    
     app.listen (port, () => console.log('Server is working'));








   