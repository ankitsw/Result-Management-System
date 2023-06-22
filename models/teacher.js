const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


module.exports = new mongoose.model("Teacher", TeacherSchema);