const customer = require ("./model/customerModel")

const handleGetRequest = async(req,res)=>{
    return res.status(200).json ({message:"successful"})
}

const handleGetCustomerRequest = async(req,res)=>{
    const customer = await customer.find()
    return res.status(200).json({
        message: "successful",
        count: customer.length,
        customer
    })
}
 
const handlePostRequest = async (req, res)=>{
    const { name, email, phone, address} = req.body
    console.log({name, email, phone, address})
    const newCustomer = new Customer ({name, email, phone, address})

    console.log({newCustomer})

    await newCustomer.save

    return res.satus(200).jsaon({
        message: "successful",
        customer: newCustomer
    })
}

const handleEditCustomerRequest = async (req, res) => {
    const {id} = req.params
    const {name, email, phone, address} = req.body
    const editedBlog = await customer.findbyIdAndUpdate(
        id,
        {name,email,phone,address},
        {new:true}
    )

    return res.status(200).json({
        message:"Successful",
        customer: editedCustomer
    })
}

const handleDeleteCustomerResquest = async(res,res)=>{
    const{id} = req.params
    const customer = await customer.findById(id)
    
    return res.status.json({
      message: "Deleted successfully"
    })
}




module.exports = {
    handleGetRequest,
    handleGetCustomerRequest,
    handlePostRequest,
    handleEditCustomerRequest,
    handleDeleteCustomerResquest
}
