const teachersModel = require('.././models/teacher.js')

async function addTeacher(req, res){
  try {
    const newTeacher = await teachersModel.create(req.body);
    res.status(200).json(newTeacher);
  } catch (error) {
    console.log('cant add teacher: ', error.message);
    res.status(401).json({message: 'Cant add teacher'});
  }  
}
  async function allTeachers(req, res){
    try {
      const teachers = await teachersModel.find();
      res.status(200).json(teachers);
    } catch (error) {
      console.log('cant get teachers: ', error.message);
      res.status(401).json({error: error.message});
    }
  }

  async function getTeacherById(req, res){
    try {
      const teacher = await teachersModel.findById(req.params.todoId);
      res.status(200).json(teacher);
    } catch (error) {
      console.log('cant find teacher: ', error.message); 
      res.status(401).json({error: error.message});   
    }
  }

  async function deleteTeacherById(req, res){
    const teacherId = req.params.teacherId;
    try {
      await teachersModel.findByIdAndDelete(teacherId);
      res.status(200).json({message: 'Teacher has been deleted'});
    } catch (error) {
      console.log('cant delete: ', error.message);
      res.status(401).json({error: error.message});
    }
  }
  

module.exports = { 
  allTeachers,
  getTeacherById, 
  addTeacher,
  deleteTeacherById
}