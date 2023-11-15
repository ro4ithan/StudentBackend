const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    firstName : {type : "String"},
    lastName : {type : "String"},
    email : {type : "String"},
    contact : {type : "Number"},
    parentName : {type : "String"},
    parentContact : {type : "Number"},
},
{
    collection: "Students",
});

module.exports = mongoose.model("Students",studentSchema);
