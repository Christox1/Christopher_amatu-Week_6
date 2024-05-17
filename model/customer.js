const mongoose = require("mongoose");
const { Schema, model } = mongoose; // Correctly destructuring Schema and model from mongoose

const customerSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Fixed unique constraint
    phone: { type: String, required: true },
    address: { type: String, required: true }
});

const Customer = model("Customer", customerSchema); // Correct usage of model without new

module.exports = Customer; // Use PascalCase for the model name