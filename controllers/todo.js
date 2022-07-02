const Todo = require('../models/todo')
exports.getTodoById = (req,res,next,todoId)=>{
  Todo.findById(todo).exec((err,todo)=>{
    if(err || !todo){
      return res.status(400).json({
        error:"error 404 todo not found",
      })
    }
    req.todo = todo
    next();
  })
}

//getting all todo

exports.getAllTodo = (req,res)=>{
  Todo.find()
    .sort("-createdAt")
    .exec((err,todos)=>{
      if(err || !todos){
        return res.status(400).json({
          error:"something went wrong in finding all the todos task"
        })
      }
      res.json(todos)
    })
}

//get individual todo
exports.getTodo = (req,res)=>{
  return res.json(req.todo)
}

//create to do

exports.createTodo = (req,res)=>{
  const todo = new Todo(req.body)

  todo.save((err,task)=>{
    if(err || !task){
      return res.status(400).json({
        error:"something went wrong"
      })
    }
    res.json({task})
  })
}

//updating todo

exports.updateTodo = (req,res)=>{
  const todo = req.todo
  todo.task = req.body.task
  todo.save((err,Taskdata)=>{
    if(err || !Taskdata){
      return res.status(400).json({
        error:"something went wrong in updating task"
      })

    }
    res.json(Taskdata)

  })
}

//deleting todo task function

exports.delTodo = (req,res)=>{
  const todo = req.todo
  todo.remove((err,task)=>{
    if(err || !task){
      return res.status(400).json({
        error:"something went wrong in deleting the task"
      })
    }
    res.json({
      taskDeleted:task,
      message:"todo deleted successfully",
    })
  })
}