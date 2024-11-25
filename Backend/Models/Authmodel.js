import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type : String, required: true},
    email:{type : String, required: true},
    studentId: {type : String, required: true},
    role: {type : String, required: true},
    password: {type : String, required: true},
    lastLogin: {type : Date, default: Date.now},


    //Payments
    payments: [{
        amount: { type: Number },
        status: { type: String },
        transactionId: { type: String },
        transactionDate: { type: Date, default: Date.now }
    }],
    //Hall Registration
    hallRegistration: {
        hallName: {type : String},
        hallId: {type : String},
        roomNumber: {type : String},
        hallRegistrationDate: {type : Date, default: Date.now},
    },
    
});

const User = mongoose.model('User', userSchema);
export default User;