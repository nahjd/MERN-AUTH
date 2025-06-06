const express = require("express");
const dotenv = require("dotenv").config()
const cors = require('cors');
const {mongoose}= require('mongoose');
const cookieParser = require('cookie-parser')
const app = express();
const port = process.env.PORT || 8000
//database mongodb
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('Database connected'))
.catch((err) => console.log('Database not connected', err))

//middleware
app.use(cors({
  origin: 'https://mern-auth-5mwv.vercel.app',
  credentials: true
}));
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded ( {extended: false} ))



app.use('/', require('./routes/authRoutes'))

app.listen(port, () => console.log(`Server is running on port ${port}`))