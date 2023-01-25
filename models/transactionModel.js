const mongoose = require("mongoose");

// schema design

const transacationModel = new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    amonut: {
        type: Number,
        required: [true, "amount is rquired"]
    },
    
    type: {
        type: String,
        required: [true, "type is rquired"]
    },
    category: {
        type: String,
        required: [true, "Category is rquired"]
    },
    reference: {
        type: String,
    },
    description: {
        type: String,
        required: [true, "description is required"]
    },
    date: {
        type: Date,
        required: [true, 'date is required']
    }
}, {
    timestamps: true
})
const transaction = mongoose.model("transaction", transacationModel);
module.exports = transaction;