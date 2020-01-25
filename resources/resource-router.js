const express = require('express');

const Resources = require('./resource-model.js');

const router = express.Router();

router.get("/", (req, res) => {
    Resources.get()
    .then(resources => {
        res.json(resources);
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to get resources.' });
      });
})

router.post("/", (req, res) => {
    const resourceData = req.body;
    if (!resourceData.resource_name || !resourceData.resource_description){
      res.status(400).json( { errorMessage: "Please provide a name and description for the resource." })
    } else {
      Resources.add(resourceData)
      .then(resource => {
        res.status(201).json(resource);
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to create new resource.' });
      });
    }
})

module.exports = router;