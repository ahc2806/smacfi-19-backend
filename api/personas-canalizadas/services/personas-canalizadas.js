'use strict';

module.exports = {

    findPersonas(params, populate) {
        return strapi.query('personas').findOne(params, populate);
    },
};
