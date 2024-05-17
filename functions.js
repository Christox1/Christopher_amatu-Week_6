const customerModel = require ("./model/customer")


const handleGetCustomerRequest = async(req,res)=>{
    const customer = await customerModel.find()
    return res.status(200).json({
        message: "successful",
        count: customer.length,
        customer
    })
}
 
const handlePostRequest = async (req, res)=>{
    const { name, email, phoneNumber, address} = req.body
    const newCustomer = new customerModel({name, email, phoneNumber, address})
    console.log({newCustomer})

    await newCustomer.save()

    return res.status(200).json({
        message: "successful",
        customer: newCustomer
    })
}

const handleEditCustomerRequest = async (req, res) => {
    const {id} = req.params
    const {name, email, phoneNumber, address} = req.body
    const updatedCustomer = await customerModel.findByIdAndUpdate(
        id,
        {name,email,phoneNumber,address},
        {new:true}
    )

    return res.status(200).json({
        message:"Successful",
        updatedCustomer
    })
}

const handleDeleteCustomerRequest = async(req, res)=>{
    const {id} = req.params
    const deletedCustomer = await customerModel.findByIdAndDelete(id)
    
    return res.status(200).json({
      message: "Deleted successfully"
    })
}

module.exports = {
  
    handleGetCustomerRequest,
    handlePostRequest,
    handleEditCustomerRequest,
    handleDeleteCustomerRequest
}
