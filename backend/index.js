require('dotenv').config()
let {userDB,vendorDB,proposalDB,proposalimagesDB} = require('./connector')
const personRoute=require('./Routes/personRoute')
const ProposalRoute=require('./Routes/ProposalRoute')
const express =require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const app=express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/public',express.static('public'))
app.use('/person',personRoute)
app.use('/proposal',ProposalRoute)
app.listen(process.env.PORT,()=>{console.log('listening on port'+process.env.PORT)})
app.get('/',(req,res)=>{res.send('welcome')})