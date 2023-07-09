const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');;
const DB_URL = 'mongodb+srv://rugvedwagh02:rugved76@clusternew.xrsceyc.mongodb.net/?retryWrites=true&w=majority'

const personSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const person = mongoose.model('person', personSchema);

const app = express();
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3002'],
}));

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Successfully connected to database!\n')
}).catch((e) => {
    console.log(e)
});

app.get('/', (req, res) => {
    res.send("Server is up and running...")
})

app.post('/signup', async (req, res) => {

    try {
        const { email, password } = req.body;
        const existingUser = await person.findOne({ email })

        if (existingUser) {
            res.status(409).json({ message: 'User already exists!' })
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const persondoc = new person({
            email,
            password: hashedPassword
        })

        await persondoc.save();

        res.status(201).json({ message: 'Signup successfull!' })
    } catch (e) {
        console.log(e)
        res.status(201).json({ message: 'Internal server error!' })
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const persondoc = await person.findOne({ email })

        if (!persondoc) {
            return res.status(404).json('User not found')
        }

        const passok =await bcrypt.compare(password, persondoc.password);
        if (!passok) {
            res.status(401).json({ message: 'Invalid password!' })
        }

        const token = jwt.sign({ userId: persondoc._id }, 'secret-key')
        res.status(200).json({ token })

        console.log('\nLogin successfull...')
        console.log({ email, password, token })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Internal server error!' })
    }
})

app.listen(3002, (req, res) => {
    console.log('Server is listenning onport 3002...')
})