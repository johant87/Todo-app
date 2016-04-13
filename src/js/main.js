var App = require('./components/App');
var React = require('react');
var ReactDom = require('react-dom');
var AppAPI = require('./utils/AppAPI.js');

AppAPI.getLists();

ReactDom.render(
  <App />,
  document.getElementById('app')
);
