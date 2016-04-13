var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var AddListForm = React.createClass({


  render: function(){
    return(
      <div className="container">
        <h3> Add list</h3>
          <form onSubmit={this.onSubmit}>
            <label>list
                <input type="text" ref="title" placeholder="enter list" />
            </label>
            <button className="btn btn-default">submit</button>
          </form>
      </div>
    );
  },
  onSubmit: function(e){
    e.preventDefault();
      var list = {
        title: this.refs.title.value.trim()
      }
      AppActions.addList(list);
  }
});

module.exports = AddListForm;
