const connect = async()=>{
    const mongoose = require("mongoose")
    try{
  await mongoose.connect("mongodb+srv://patelmaan3104:rVlf05xq2UuMT34S@cluster0.vvvvgmo.mongodb.net/food-del")
  console.log("connected sucessfuly!")
 }catch(err){
console.log(err)
 }
}

module.exports = connect() 