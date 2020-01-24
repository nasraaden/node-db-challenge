const express = require('express');

const Tasks = require('./task-model.js');

const router = express.Router();

router.get("/", (req, res) => {
    Tasks.get()
    .then(tasks => {
        res.json(tasks);
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to get tasks.' });
      });
})

router.post("/", (req, res) => {
    const taskData = req.body;
    if (!taskData.project_id || !taskData.task_description){
      res.status(400).json( { errorMessage: "Please provide a project id and description for the task." })
    } else {
      Tasks.add(taskData)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to create new task.' });
      });
    }
})

module.exports = router;