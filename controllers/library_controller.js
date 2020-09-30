const express = require('express')
const library = express.Router()

const Library = require("../models/library.js")

const libSeed = require("../models/library_seed.js")

//seed
library.get("/seed", (req,res)=>{
    Library.create(libSeed, (err,seedData)=>{
            res.redirect("/")
    })
})
//drop
library.get("/confirm/drop",(req,res)=>{
    Library.collection.drop()
    res.redirect("/")
})
//index
library.get("/", (req,res)=>{
    Library.find({}, (err, foundBooks)=>{
        res.json(foundBooks)
    })
})

//create
library.post("/", (req,res)=>{
    Library.create(req.body, (err, createdBook)=>{
        Library.find({}, (err, foundBooks)=>{
            res.json(foundBooks)
        })
    })
})

//edit
library.put("/:id", (req,res)=>{
    // for(library of req.body.library){

    // }
    Library.findByIdAndUpdate(req.params.id, req.body, {new: true},(err, updatedLibrary)=>{
        if(err){
            res.send(err)
        }else{
            Library.find({}, (err, foundBooks)=>{
                res.json(foundBooks)
            })
        }
    })
})
//delete
library.delete("/:id", (req,res)=>{
    Library.findByIdAndDelete(req.params.id, (err, deletedBook)=>{
        Library.find({}, (err, foundBooks)=>{
            res.json(foundBooks)
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
            Library.find({}, (err, foundBooks)=>{
                res.json(foundBooks)
            })
        }
    })
})

module.exports = library