'use strict';

module.exports = async (ctx) => {
  return ctx.notFound('La ruta no existe, intente de nuevo.');
};
