require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.Promise = global.Promise;
mongoose.connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
    user: 'root',
    pass: 'example'
}).then(() => {
    console.log('successfully connected to the database');
}).catch(err => {
    console.log('error connecting to the database');
    console.log(err);
    process.exit();
});

// mongoose.connect(mongoString);
// const database = mongoose.connection;

// const connection = mongoose.createConnection( 
//     process.env.DATABASE_URL, {
//                   useNewUrlParser: true,
//                   user: process.env.MONGO_INITDB_ROOT_USERNAME,
//                   pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
//                   keepAlive: true,
//                 })

// mongoose.connect('mongodb://localhost:27017/usersdb',
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// );


// database.on('error', (error) => {
//     console.log(error)
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// })
const app = express();
app.use(cors())
app.use(express.json());

const routes = require('./routes/routes');

app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})