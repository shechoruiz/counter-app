import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp />", () => {
  // Prueba realizada con Jest
  // test('1. Debe mostar el mensaje "Hola, soy Sergio"', () => {
  //   const saludo = "Hola, soy Sergio";
  //   // const wrapper = render(<PrimeraApp saludo={saludo} />);
  //   /* Se puede hacer una desestructuración del wrapper anterior y obtener
  //     directamente el getByText */

  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);

  //   expect(getByText(saludo)).toBeInTheDocument();
  // });

  // Prueba realizada con Enzyme

  test("2. Debe mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Hola, soy Sergio";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("3. Debe mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola, soy Sergio";
    const subtitulo = "Este es el subitutlo de prueba";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    // Este metodo find funciona mucho al querySelector de Javascript
    const textoParrafo = wrapper.find("p").text();
    console.log(textoParrafo);
    expect(textoParrafo).toBe(subtitulo);
  });
});
