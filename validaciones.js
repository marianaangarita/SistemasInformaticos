// Archivo: validaciones.js

export const ejecutaValidacion = (data, validacion, mensajedeError) => {
  return validacion(data) ? data : { error: mensajedeError };
}