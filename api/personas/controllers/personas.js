'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {

  async findBarcode(ctx) {
    const { barcode } = ctx.params;

    const entity = await strapi.services.personas.findOne({ barcode });
    return sanitizeEntity(entity, { model: strapi.models.personas });
  },
};
