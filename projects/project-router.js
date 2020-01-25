const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get("/", (req, res) => {
    Projects.get()
    .then(projects => {
        res.json(projects);
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to get projects.' });
      });
})

router.post("/", (req, res) => {
    const projectData = req.body;
    if (!projectData.name || !projectData.description){
      res.status(400).json( { errorMessage: "Please provide name and description for the project." })
    } else {
      Projects.add(projectData)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to create new project.' });
      });
    }
})


module.exports = router;