const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const ongController = require('./controllers/ongController');
const sessionController = require('./controllers/sessionController');
const profileController = require('./controllers/profileController');
const incidentController = require('./controllers/incidentController');
const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    })
}), sessionController.create);

routes.get('/ongs', ongController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        whatsapp: Joi.string().min(8).max(11).required(),
        city: Joi.string().required(),
        uf: Joi.string().length(2).required(),
    })
}), ongController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}), profileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),incidentController.index);

routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    })
}),incidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
}), incidentController.delete)

module.exports = routes;