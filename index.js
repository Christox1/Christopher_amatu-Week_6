const express = require ("express")
const dotenv = require ("dotenv")
const mongoose = require ("mongoose")
const {handleGetCustomerRequest, handlePostRequest, handleEditCustomerRequest, 
    handleDeleteCustomerRequest} = require("./functions")

dotenv.config()
const app = express()

app.use(express.json())
const PORT= process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})

mongoose.connect(process.env.MONGODB_URL)
.then (()=>(
    console.log("MongoDB is connected")
))

    

    
app.get ("/customer", handleGetCustomerRequest)
app.post ("/add-customer",  handlePostRequest)
app.put ("/edit-customer/:id", handleEditCustomerRequest)
app.delete ("/delete-cutomer/:id", handleDeleteCustomerRequest)