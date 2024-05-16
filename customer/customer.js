const {model, schema} = require ("mongoose")

const customerSchema = new Schema ({
    name: {type :String, require},
    email: {type :String, require},
    phone: {type :String, require},
    address:{type :String, require}
})
const customer = new model ("customer", customerSchema)



module.exports = customer