import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string"

describe('Pruebas en 02-template-string.js', () => {
  test('1. getSaludo debe retornar Hola + nombre', () => {
    const nombre = 'Sergio'

    const saludo = getSaludo(nombre)

    expect(saludo).toBe('Hola ' + nombre)
  })

  test('2. getSaudo debe retornar Hola Carlos si no hay argumento en nombre', () => {
    const saludo2 = getSaludo()

    expect(saludo2).toBe('Hola Carlos')
  })
})