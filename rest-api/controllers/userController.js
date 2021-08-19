const express=require("express")
const router=express.Router()
let users=[
    {
    userName:"Talha",
    userID:1
    },
    {
        userName:"Mirza",
        userID:2
        }
]
 //post
 router.post('/addUser',(req,res)=>{
     console.log(req.body)
     users.push(req.body)  
     res.status(201).send(req.body)
 })
//request
router.get('/viewUser',(req,res) => {
  
    res.status(200).json(users)
})

module.exports= router