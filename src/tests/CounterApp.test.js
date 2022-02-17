import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas con ezyme sobre <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);

  // La siguiente línea reinicia el componente que se evalua, con el fin de tener datos iniciales siempre
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("1. Mostrar <CounterApp /> correctamente con snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("2. Debe mostrar el valor por defecto de 100", () => {
    // const value = 101;
    const wrapper = shallow(<CounterApp value={100} />);

    const numbercounter = wrapper.find("h2").text();
    expect(numbercounter).toBe("100");
    // expect(numbercounter).toBe(`${value}`);
  });

  test("3. Debe incrementar el contador con el +1", () => {
    const btn1 = wrapper.find("button").at(0).simulate("click");
    // console.log(btn1.html()); // Con esto se confirma que es el botón seleccionado deseado
    const numbercounter = wrapper.find("h2").text();

    expect(numbercounter).toBe("11");
  });

  test("4. Debe decrementar el contador con el -1", () => {
    const btn2 = wrapper.find("button").at(2).simulate("click");
    // console.log(btn1.html()); // Con esto se confirma que es el botón seleccionado deseado
    const numbercounter = wrapper.find("h2").text();

    expect(numbercounter).toBe("9");
  });

  test("5. Se debe resetear el counter cuando se hace clic en reset", () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");

    const numbercounter = wrapper.find("h2").text();

    expect(numbercounter).toBe("105");
  });
});
