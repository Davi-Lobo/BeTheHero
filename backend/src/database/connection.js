const knex = require('knex');
const config = require('../../knexfile');

const settings = process.env.NODE_ENV === 'test' ? config.test : config.development;

const connection = knex(settings);

module.exports = connection;