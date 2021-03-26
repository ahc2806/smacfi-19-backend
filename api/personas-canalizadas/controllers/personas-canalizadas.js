'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    
    async findAll() {
        try {
            const persons_canalize = await strapi.services['personas-canalizadas'].find();
            
            persons_canalize.map(async (data, i) => {
                persons_canalize[i].alumno.persona = await strapi.services['personas-canalizadas'].findPersonas({ id: data.alumno.persona });
            });

            return sanitizeEntity(persons_canalize, { model: strapi.models['personas-canalizadas'] });
        } catch (error) {
            console.log(error);
            return ctx.throw(400, error);
        }
    },
};
