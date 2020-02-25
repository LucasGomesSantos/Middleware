const mongoose = require('mongoose')

const Project = mongoose.model('Project')



module.exports = {
    async index(req, res){
    const { page = 1} = req.query; 
    const projects = await Project.paginate({}, {page, limit: 10});
       
    return res.json(Projects);
    },

    async store(req, res){
       const project = await Project.create(req.body);
       return res.json(project)
    },

    async show(req, res){
        const project = await Project.findById(req.params.id);
        return res.json(project);
    }, 

    async update(req, res){
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(project);

    }, 

    async destroy(req, res){
        await Project.findByIdAndRemove(req.params.id)

        return res.send();
    }
};