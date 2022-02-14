import { getImagen } from "../../base/11-async-await";

describe("Pruebas sobre en 11-async-await.js", () => {
  test("1. Debe retornar el URL de la imagen", async () => {
    const url = await getImagen();
    console.log(url);

    expect(typeof url).toBe("string");
  });
});
