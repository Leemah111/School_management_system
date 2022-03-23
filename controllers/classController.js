const classModel = require('.././models/class.js');


async function createClass(req, res){
    try {
      const newClass = await classModel.create(req.body);
      res.status(200).json(newClass);
    } catch (error) {
      console.log('cant create class: ', error.message);
      res.status(401).json({message: 'Cant create class'});
    }  
  }
    async function getClasses(req, res){
      try {
        const classes = await classModel.find();
        res.status(200).json(classes);
      } catch (error) {
        console.log('cant get classes: ', error.message);
        res.status(401).json({error: error.message});
      }
    }
  
    async function getClassById(req, res){
      try {
        const classId = await classModel.findById(req.params.todoId);
        res.status(200).json(classId);
      } catch (error) {
        console.log('cant find class: ', error.message); 
        res.status(401).json({error: error.message});   
      }
    }
  
    async function deleteClassById(req, res){
      const theClass = req.params.theClass;
      try {
        await classModel.findByIdAndDelete(theClass);
        res.status(200).json({message: 'Class has been deleted'});
      } catch (error) {
        console.log('cant delete: ', error.message);
        res.status(401).json({error: error.message});
      }
    }
    
  
  module.exports = { 
    createClass,
    getClassById, 
    getClasses,
    deleteClassById
  }
  