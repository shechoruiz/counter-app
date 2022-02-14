import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas en 09-promesas.js", () => {
  test("1. Debe retornar un heroe async", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("2. Debe obtener un error si el héroe por id no existe", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((error) => {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
