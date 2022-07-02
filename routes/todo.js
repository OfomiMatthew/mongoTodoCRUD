const express = require('express')
const router = express.Router()

//creating the controllers

const {
  createTodo,
  getTodoById,
  getTodo,
  delTodo,
  getAllTodo,
  updateTodo
} = require('../controllers/todo')

router.param("todoId",getTodoById)
router.get("/todos/",getAllTodo)
router.get("/todo/:todoId",getTodo)
router.post("/todo/create/",createTodo)
router.put("/todo/:todoId/update",updateTodo)
router.delete("/todo/:todoId/delete/",delTodo);

module.exports =router;