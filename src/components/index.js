import  React from 'react';
import { hydrate } from 'react-dom';
import '../styles/index.scss';
import App from './App';

hydrate(<App />, document.getElementById("app"));
