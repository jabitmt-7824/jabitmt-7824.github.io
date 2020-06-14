const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statusSchema = new Schema({
    hobbie_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hobbie"
    },
    date:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        required:true
    }
});

const DayStatus = mongoose.model("DayStatus",statusSchema);

module.exports = DayStatus;