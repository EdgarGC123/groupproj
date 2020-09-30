const express = require('express')
const library = express.Router()

const Library = require("../models/library.js")

//index
library.get("/", (req,res)=>{
    Library.find({}, (err, foundLibraries)=>{
        res.json(foundAnimal)
    })
})

//create
library.post("/", (req,res)=>{
    Library.create(req.body, (err, createdLibrary)=>{
        Library.find({}, (err, foundLibraries)=>{
            res.json(foundAnimal)
        })
    })
})

//edit
library.put("/:id", (req,res)=>{
    Library.findByIdAndUpdate(req.params.id, req.body, {new: true},(err, updatedLibrary)=>{
        if(err){
            res.send(err)
        }else{
            Library.find({}, (err, foundLibraries)=>{
                res.json(foundAnimal)
            })
        }
    })
})
//delete
library.delete("/:id", (req,res)=>{
    Library.findByIdAndDelete(req.params.id, (err, deletedLibrary)=>{
        Library.find({}, (err, foundLibraries)=>{
            res.json(foundAnimal)
        })
    })
})

//edit partially
//NOT FULLY SETUP
library.patch("/:id", (req,res)=>{
    Shelter.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedPerson) => {
        if (err) {
            res.send(err)
        } else {
            Shelter.find({}, (err, foundAnimal) => {
            res.json(foundAnimal)
            })
        }
    })
})