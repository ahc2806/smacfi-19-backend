'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {

  async findEnrollment(ctx) {
    const { enrollment } = ctx.params;

    const entity = await strapi.services.alumnos.findOne({ enrollment });
    return sanitizeEntity(entity, { model: strapi.models.alumnos });
  }
};
