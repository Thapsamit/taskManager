const Tasks = require('../models/task')

const getAllTasks = async (req,res)=>{
	try{
		const tasks = await Tasks.find({})
		// can be used in EJS templating for flashing messages from server
		// res.status(201).json({msg:"success",data:{task,total:tasks.length}})
		res.status(201).json({tasks})
	}
	catch(err){
		res.status(500).json({msg:err})
	}
}
const createTask = async (req,res)=>{
	try{
		const task = await Tasks.create(req.body)
	   res.status(201).json({task})
	}
	catch(err){
		res.status(500).json({msg:err})
	}
	   
}
const getTask = async (req,res)=>{
    try{
    	const id =  req.params.id;
         const task = await Tasks.findOne({_id:id})
         // if not given id is present in db and always return  means syntax of id is correct but id is not present but if id syntax is incorrect then we go to catch blockk
         if(task==null){
               return res.status(404).json({msg:`No Task with given id : ${id}`})
         }
         res.status(201).json({task})
    }
	catch(err){
		res.status(500).json({msg:err})
	}
}
const updateTask = async (req,res)=>{
       try{
             const id = req.params.id;
             const task = await Tasks.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true})
             if(task==null){
               return res.status(404).json({msg:`No Task with given id : ${id}`})
         }
             res.status(200).json({task})
      }
      catch(err){
      	res.status(500).json({msg:err})
      }
}
const deleteTask = async (req,res)=>{
    try{
    	const id =  req.params.id;
         const task = await Tasks.findByIdAndDelete({_id:id})
         // if not given id is present in db and always return  means syntax of id is correct but id is not present but if id syntax is incorrect then we go to catch blockk
         if(task==null){
               return res.status(404).json({msg:`No Task with given id : ${id}`})
         }
         res.status(201).json({task})
    }
	catch(err){
		res.status(500).json({msg:err})
	}	
}
module.exports = {
	getAllTasks,
	createTask,
	getTask,
	deleteTask,
	updateTask
}