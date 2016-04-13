var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddListForm = require('./AddListForm.js')
var ShowList = require('./ShowList.js')

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
    return(

      <div>
        <AddListForm />
        <ShowList lists = {this.state.lists} />
      </div>
    );
  },
  _onChange: function(){
    this.setState(getAppState());
  }
});

module.exports = App;
