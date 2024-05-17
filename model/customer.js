const mongoose = require("mongoose");
const { Schema, model } = mongoose; // Correctly destructuring Schema and model from mongoose

const customerSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Fixed unique constraint
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true }
});

const customerModel = model("Customer", customerSchema); // Correct usage of model without new

module.exports = customerModel; // Use PascalCase for the model name