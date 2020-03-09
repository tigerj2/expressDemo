const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const uri = "mongodb+srv://tigerj2:1234@rest-yha3u.mongodb.net/test?retryWrites=true&w=majority";


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


app.get('/', (req,res) => {
    res.send('Home screen');
});


//Connect to db
mongoose.connect(uri, 
                {useUnifiedTopology: true, useNewUrlParser: true}, 
                () => console.log("Connected to dB")
);
app.listen(3000);