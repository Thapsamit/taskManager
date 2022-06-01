const mongoose = require('mongoose')


const connect = (url)=>{
return mongoose.connect(url)
.then(()=>{
  console.log("Connected With Mongo Db Atlas")
})
.catch((err)=>{
	console.log("Some Error Occured"+err)
})	
}
module.exports = connect
