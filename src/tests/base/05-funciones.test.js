import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en 05-funciones.js", () => {
  test("1. getUser debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("2. getUsuarioActivo debe retornar un objeto", () => {
    const nombre = "Sergio";

    const userActive = getUsuarioActivo(nombre);

    expect(userActive).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
