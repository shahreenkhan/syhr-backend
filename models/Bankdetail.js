const mongoose = require('mongoose')

const bankdetailSchema = new mongoose.Schema({  //object
    bank:{ //feild
        type:String,
        Required:true
    },
    ifsc_code:{
        type:String,
        Required:true
    },
    branch_name:{
        type:String,
        Required:true
    },
    account_number:{ 
        type:String,
        Required:true
    },
    cif_number:{
        type:String,
        Required:true
    },
    name_asperbank:{
        type:String,
        Required:true
    },
},

{timestaps:true})
const bankdetailModel = mongoose.model('bankdetail',bankdetailSchema)

module.exports = bankdetailModel