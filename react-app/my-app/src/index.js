import React from "react";
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';

//const element = <h1>Hello world!</h1>

//console.log(element);
//ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(<Counters/>, document.getElementById('root'));