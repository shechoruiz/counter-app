import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ({ saludo, subtitulo }) => {

  return (
    <>
      <h1>{saludo}</h1>
      <h2>{subtitulo}</h2>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
  subtitulo: 'soy un subtitulo'
}

export default PrimeraApp;
