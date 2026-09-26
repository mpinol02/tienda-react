export function validarEdad(edad) {
  if (edad < 0) {
    return 'Edad no válida'
  }

  if (edad >= 18) {
    return 'Mayor de edad'
  }

  return 'Menor de edad'
}
