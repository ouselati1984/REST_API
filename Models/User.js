const mongoose=require('mongoose')
const schema=mongoose.Schema;

const UserSchema= new schema({
    first_name:{
        type:String,
        required:true,
  
    },
    last_name:{
        type:String,
        required:true,
  
    },
    email:{
        type:String,
        unique:true
    },
    dateCreation:{
        type:Date,
        default:Date.now()
    },
    age:{
        type:Number,
       
    }
})

module.exports=User= mongoose.model('user',UserSchema)

//created a schema 