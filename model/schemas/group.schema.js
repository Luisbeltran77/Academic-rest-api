/** packages */
const mongoose = require("mongoose");

/** Schema creation */

const groupSchema = mongoose.Schema({
    course_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_course",
        required: true,
    },
    teacher_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_teacher",
        required: true,
    },
    number:{
        type: "Number",
        required: true
    },
    code:{
        type: "String",
        required: true
    },
    name:{
        type: "String",
        required: true
    }
});

/** Schema exportation */

module.exports = groupSchema;