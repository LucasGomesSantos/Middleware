const express = require('express');
const mongoose = require('mongoose')

const server = express();

//conn banco mongo
mongoose.connect('mongodb+srv://lucas:258LiA@47@cluster0-b9qyr.mongodb.net/DesafioProject?retryWrites=true&w=majority',{ useNewUrlParser: true ,useUnifiedTopology: true})




server.listen(3001);