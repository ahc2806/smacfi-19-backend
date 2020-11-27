'use strict';

module.exports = {

  findAlumno(params, populate) {
    return strapi.query('alumnos').findOne(params, populate);
  },

  findPersona_canalizada(params, populate) {
    return strapi.query('personas-canalizadas').findOne(params, populate);
  },
};
