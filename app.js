// Importing the Express Dependency
const express = require('express');

// Importing the Functions that run on this Website
const Functions = require('./Site.js')

// Initializing the Express Dependency
const app = express();

// Initializing Some MiddleWare
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

// Creating the PORT Number Variable
const PORT = 3000;
// Listening for responses from server 
app.listen(PORT, ()=>{
    console.log(`--------------------Server has begun on the port ${PORT}--------------------`)
})

// Creating the Home page for this Website
app.get('/', async (req, res)=>{
    return res.render('Encrypt')
})

// Creating the Encryption Part of the Web Application
app.post('/encrypt', async (req, res)=>{
    const { name, text } = req.body;
    if (name && text){
        const Value123 = await Functions.Encrypter(text, name);
        if (Value123){
            return res.render('Encrypted', { 
            Object: Value123.name,
            Object2: Value123.outcome
            })
        }
    } 
    else {
    return res.render('Encrypted', { 
        Object: "Fields are Incomplete",
        Object2: "Please go back and fill in those fields"
        })
    }   
})

// Decryption View of the Web App
app.get('/decrypt', async (req, res)=>{
    return res.render('Decrypt')
})

// Actual Decrption in the App
app.post('/decrypted', async (req, res)=>{
    const { name, text } = req.body;
    if (name && text){
        const Value123 = await Functions.Decrypt(text, name);
        return res.render('Decrypted' ,{
            value: Value123
        })
    }
    else {
        return res.render('Decrypted' ,{
            value: ''
        })
    }
})

// The Base Route
app.use(async (req, res)=>{
    return res.render('Encrypt')
})