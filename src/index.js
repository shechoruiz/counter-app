import React from "react";
import ReactDOM  from "react-dom";

import './index.css'
import CounterApp from "./CounterApp";

const divRoot = document.querySelector('#root')

ReactDOM.render( <CounterApp value={10} />, divRoot )
