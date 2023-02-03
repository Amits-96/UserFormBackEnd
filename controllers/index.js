const item = require('../models/details');

let addFormData = async (req, res, next) => {
    console.log("data",req.body)
    let { firstName, lastName, middleName, address, email, phone } = req.body;
    try {
      await item.insertMany([
        { firstName, lastName, middleName, address, email, phone },
      ]);
      res.json({
        error: false,
        message: "Form Information Added Sucessfully",
        data: { firstName, lastName, middleName, address, email, phone },
      });
    } catch (err) {
      next(err);
    }
  };

  const deleteFormData = async (req, res, next) => {
    console.log("del", req.params._id)
    try {
      let data = await item.findOne({ _id: req.params._id });
      if (data) {
        await item.findByIdAndDelete({ _id: req.params._id });
        res.json({
          error: false,
          message: "FormData deleted successfully",
          data: null,
        });
      } else {
        res.json({
          error: true,
          message: "invalid Id",
          data: null,
        });
      }
    } catch (err) {
      next(err);
    }
  };

  let editFormData = async (req, res, next) => {
    console.log("log",req.params._id)
    let { firstName, lastName, middleName, address, email, phone } = req.body;
  
    try {
      let data = await item.findOne({ _id: req.params._id });
      console.log("data",data)
      if (data) {
        await item.findByIdAndUpdate(
          { _id: req.params._id },
          {
            $set: { firstName, lastName, middleName, address, email, phone},
          }
        );
        res.json({
          err: false,
          message: "FormData Edited Sucessfully",
          data: { firstName, lastName, middleName, address, email, phone},
        });
      } else {
        res.json({
          error: true,
          message: "invalid Id",
          data: null,
        });
      }
    } catch (err) {
      next(err);
    }
  };
  let getAllFormData = async (req, res, next) => {
    // console.log("request----->", req);
    try {
      let formprocess = await item.find().lean();
      res.json({
        error: false,
        message: "All Form Information",
        data: formprocess,
      });
    } catch (err) {
      next(err);
    }
  };

  module.exports = {
    getAllFormData,
  addFormData,
  editFormData,
  deleteFormData
  };