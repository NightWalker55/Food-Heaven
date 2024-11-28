const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const User = require('./models/user.js')
const Food = require('./models/food.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(`${process.env.MONGO_DB_URI}`)
.then(()=>console.log('Database connected'))
.catch((err) => console.error('Database connection failed:', err));


app.post('/login',async(req,res)=>{
    const {email,password} = req.body;
   
        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            return res.status(401).json({ status: 'error', message: 'Invalid password' });
        }

            return res.json({
                status: 'success',
                message: 'Login successful',
                user: { id: user._id, email: user.email, name: user.name },
              });
        

})

app.post('/register',async (req,res)=>{
    //console.log(req.body)
    const {name,email,password,confirmPassword} = req.body;
    try {
        const existingUser = await User.findOne({ email });


       if (existingUser) {
       return res.status(400).json({ status: 'error', message: 'Email already exists' });
      }

      if(password!==confirmPassword){
        return res.status(400).json({ status: 'error', message: 'Passwords dont match' });
      }

      const hashedPassword = await bcrypt.hash(password,10)
        const user = await User.create({
            name,
            email,
            password:hashedPassword
        })
        
        res.json({
            status: 'success',
            message: 'User registered successfully',
            user: { id: user._id, email: user.email, name: user.name },
          });
    } catch (error) {
       console.log(error)
    }
})

app.get('/',async(req,res)=>{
 try {
        const data = await Food.find();
        return res.json(data)
 } catch (error) {
        console.log(error)
 }
    
})

app.get('/:id',async(req,res)=>{
    const { id } = req.params;
    try {
        const data = await Food.findById(id);
        return res.json(data);
    } catch (error) {
        
    }
})

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`)
})