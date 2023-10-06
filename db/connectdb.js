const mongoose = require('mongoose')

const connectdb = ()=>{
    // con="mongodb+srv://shareenkhan:ashreen1997@cluster0.veo6aka.mongodb.net/blogwebsite?retryWrites=true&w=majority"
con="mongodb+srv://shahreen:ashreen1997@cluster0.t8opfsb.mongodb.net/syhr?retryWrites=true&w=majority"
    //return mongoose.connect('mongodb://localhost:27017/blog_project') //mongodb host name
    return mongoose.connect(con)
    .then(()=>{
        console.log('connected successfully')
    }).catch((err)=>{
        console.log(err)
    })

}
module.exports = connectdb


//  return mongoose.connect('mongodb://0.0.0.0:27017/survey')