'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {

    async findEnrollment(ctx) {
    const { enrollment } = ctx.params;

    const alumno = await strapi.services.diagnosticos.findAlumno({ enrollment });
    const id_alumno = alumno.id;
    const persona = await strapi.services.diagnosticos.findPersona_canalizada({ alumno: id_alumno });
    const id_persona = persona.id;
    const diagnostico = await strapi.services.diagnosticos.findOne({ persona_canalizada: id_persona });

    diagnostico.persona_canalizada = persona;
    diagnostico.persona_canalizada.alumno = alumno;
    diagnostico.persona_canalizada.alumno.persona = alumno.persona;

    return sanitizeEntity(diagnostico, { model: strapi.models.diagnosticos });
  }
};
