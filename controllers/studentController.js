const Student = require('.././models/student.js')


async function addStudent(req, res){
  try {
    const newStudent = await Student.create(req.body);
    res.status(200).json(newStudent);
  } catch (error) {
    console.log('cant add student: ', error.message);
    res.status(401).json({message: 'Cant add student'});
  }  
}
  async function allStudents(req, res){
    try {
      const students = await Student.find();
      res.status(200).json(students);
    } catch (error) {
      console.log('cant get students: ', error.message);
      res.status(401).json({error: error.message});
    }
  }

  async function getStudentById(req, res){
    try {
      const student = await Student.findById(req.params.todoId);
      res.status(200).json(student);
    } catch (error) {
      console.log('cant find student: ', error.message); 
      res.status(401).json({error: error.message});   
    }
  }

  async function deleteStudentById(req, res){
    const studentId = req.params.studentId;
    try {
      await Student.findByIdAndDelete(studentId);
      res.status(200).json({message: 'Student has been deleted'});
    } catch (error) {
      console.log('cant delete: ', error.message);
      res.status(401).json({error: error.message});
    }
  }
  

module.exports = { 
  allStudents,
  getStudentById, 
  addStudent,
  deleteStudentById
}