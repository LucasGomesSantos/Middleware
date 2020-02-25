const express = require("express")
const routes = express.Router();

const projecontroller = require('./controller/projectController')

routes.get('/project', projecontroller.index);
routes.post('/project', projecontroller.store);
routes.get('/project/:id', projecontroller.show);
routes.put('/project/:id', projecontroller.update)
routes.delete('/project/:id', projecontroller.destroy)

module.exports = routes;