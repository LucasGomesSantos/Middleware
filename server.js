const express = require('express');
const mongoose = require('mongoose')
const requiredir = require('require-dir')
const cors = require('cors')

const server = express();

//conn banco mongo
mongoose.connect('mongodb+srv://lucas:258LiA@47@cluster0-b9qyr.mongodb.net/DesafioProject?retryWrites=true&w=majority',{ useNewUrlParser: true ,useUnifiedTopology: true})


requiredir('./src/models');

const Project = mongoose.model('Project');
server.use(express.json())
server.use('/api', require('./src/routes'))
server.use(cors());
server.listen(3001);
