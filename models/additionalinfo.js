const mongoose = require('mongoose')

const additionalinfoSchema = new mongoose.Schema({  //object
    nationality:{ //feild
        type:String,
        Required:true
    },
    religion:{
        type:String,
        Required:true
    },
    identity_mark:{
        type:String,
        Required:true
    },
    pob:{ 
        type:String,
        Required:true
    },
    mother_tongue:{
        type:String,
        Required:true
    },
    hobby:{
        type:String,
        Required:true
    },
    passport_number:{
        type:String,
        Required:true
    },
    passport_validity_date:{
        type:String,
        Required:true
    },
    visa_validity_date:{
        type:String,
        Required:true
    },
    driving_license_number:{
        type:String,
        Required:true
    },
    misc:{
        type:String,
        Required:true
    },
    uan_number:{
        type:String,
        Required:true
    },
    ref1_name:{
        type:String,
        Required:true
    },
    ref2_name:{
        type:String,
        Required:true
    },
    ref1_number:{
        type:String,
        Required:true
    },
    ref2_number:{
        type:String,
        Required:true
    },
    reason_leaving:{
        type:String,
        Required:true
    },
    knowledge_know:{
        type:String,
        Required:true
    },
    visa_country:{
        type:String,
        Required:true
    }
},

{timestaps:true})
const additionalinfoModel = mongoose.model('additionalinfo',additionalinfoSchema)

module.exports = additionalinfoModel