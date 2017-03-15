// // load react
// import React from 'react';
// import ReactDOM from 'react-dom';

// // load components
// import App from './components/App';
// import './index.css';

// // calls dom, drops in 'App' component, hooks into the 'root' id in the html 
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// Load React
import React from 'react';
import ReactDOM from 'react-dom';

// Load components
import Routes from './Routes';
import './index.css';

// Render root component
ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);