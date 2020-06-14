const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hobbieSchema = new Schema({
    name:{
        type:String,
        required:true
    }
});

const Hobbie = mongoose.model("Hobbie",hobbieSchema);

module.exports = Hobbie;