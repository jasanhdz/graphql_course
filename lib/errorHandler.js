'use strict';

function errorHandler(error) {
  console.error(error);
  throw new Error("Hubo un problema en el servidor");
}

module.exports = errorHandler;