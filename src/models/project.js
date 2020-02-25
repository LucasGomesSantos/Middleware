const mongoose = require('mongoose')
const mongoosepaginate = require('mongoose-paginate')

const projectSchema = new mongoose.Schema({
    id: {
        type: String, 
        require: true,
    },
    tittle: {
        type: String, 
        require: true,
    },
    tasks: {
        type: Array, 
        require: true,
    },
    datacriacao: {
        type: Date, 
        require: Date.now,
    },
});
projectSchema.plugin(mongoosepaginate)

mongoose.model('Project', projectSchema)