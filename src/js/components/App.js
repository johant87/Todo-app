var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddListForm = require('./AddListForm.js')

function getAppState(){
  return {
      lists: AppStore.getLists()
  }
}


var App = React.createClass({
  getInitialState: function(){
      return getAppState();
  },

  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },

  componentUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },

  render: function(){
    console.log(this.state.lists)
    return(
      <div>
        <AddListForm />
      </div>
    );
  },
  _onChange: function(){
    this.setState(getAppState());
  }
});

module.exports = App;
