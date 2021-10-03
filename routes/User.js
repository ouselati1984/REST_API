const express=require('express')
const User = require('../Models/User')
const router=express.Router()
let USERS=require('../Models/User')
const mongoose=require('mongoose')

//@role:testing
//@url: http://localhost:5000/api/user/test
//pubilc/private
router.get('/test',(req,res)=>{
    res.send('it is working')
})


//add a new User

router.post('/add',async (req,res)=>{

    const {first_name,last_name,email,datecreatin,age}=req.body

    try {
        const newUser= new User({first_name,last_name,email,datecreatin,age})
        const user= await newUser.save()
 res.status(200).json({msg:` ${first_name} has been added to your user`,user})

    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

//list all user in DB
//@role:get all the contacts
//@url: http://localhost:5000/api/user/all
//pubilc/private
router.get('/all', async(req,res)=>{
    try {
        const user= await User.find()
        res.status(200).json({user})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    })
    

    //put by id

    //put user by id
router.put('/edit/:id', async(req,res)=>{
    const id=req.params.id
try {
    const user= await  User.findOneAndUpdate({id:id},{$set: req.body } )
    res.status(200).json({user})
} catch (error) {
    res.status(400).json({message:error.message})
}

})

//delete
//pubilc/private
router.delete('/delete/:id',async(req,res)=>{
   
 
   const ID =req.params.id

    
   
    try {
        const user= await User.findByIdAndDelete(ID) 
        res.status(200).json({msg:'the contact has been deleted',user })
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    
    } )



module.exports=router