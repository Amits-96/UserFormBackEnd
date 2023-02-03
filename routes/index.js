const express=require('express')

const route=express.Router()

let FormController=require("../controllers/index")

route.get("/getUser",FormController.getAllFormData)
route.post("/addUser",FormController.addFormData)
route.put("/updateUser/:_id",FormController.editFormData)
route.delete("/deleteUser/:_id",FormController.deleteFormData)

module.exports=route