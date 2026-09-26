import { describe, expect, test } from 'vitest'
import { validarEdad } from './validarEdad'

describe('validarEdad', () => {
  test('18 se considera mayor de edad', () => {
    expect(validarEdad(18)).toBe('Mayor de edad')
  })

  test('17 se considera menor de edad', () => {
    expect(validarEdad(17)).toBe('Menor de edad')
  })
  test('edad negativa no es válida', () => {
    expect(validarEdad(-1)).toBe('Edad no válida')
  })
})
