const express = require ("express")
const dotenv = require ("dotenv")
const mongoose = require ("mongoose")

dotenv.config()
const app = express()

app.use(express.json())
const PORT= process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})

mongoose.connect(process.env.MongoDB_URL)
.then (()=>(
    console.log("MongoDB is connected")
))

    

    
app.get ("/", handleGetRequest)
app.get ("/customer", handleGetCustomerRequest)
app.post ("/add-customer",  handlePostRequest)
app.put ("/edit-customer/:id", handleEditCustomerRequest)
app.delete ("/delete-cutomer/:id", handleDeleteCustomerResquest
)