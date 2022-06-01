const mongoose   = require('mongoose')
const TaskSchema = new mongoose.Schema({
	taskName:{
		type:String,
		required:[true,"Must provide a Task Name"],
		trim:true,
		maxLength:[50,"Task Can't be more than 50 characters"]

	},
	completed:{
		type:Boolean,
		default:false
	}
})
module.exports = mongoose.model('Tasks',TaskSchema);