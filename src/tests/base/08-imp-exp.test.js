import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en 08-imp-exp.js", () => {
  test("1. Debe retornar un heroe por Id", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    console.log(heroe);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("2. Debe retornar un undefined si heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    console.log(heroe);

    expect(heroe).toBe(undefined);
  });

  test("3. Debe retornar un arreglo con los héroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    const heroOwner = heroes.filter((h) => h.owner === owner);

    expect(heroes).toEqual(heroOwner);
  });

  test("4. Debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
  });
});
