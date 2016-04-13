var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var List = require('./List.js');


var ShowList = React.createClass({


  render: function(){
    console.log("geef mij is die lijst yo", this.props.lists);
    return(
      <div className="container">
          {
            this.props.lists.map(function(list, i){
              return (
                <List list={list} key={i} />
              )
            })
          }
      </div>
    );
  },
});

module.exports = ShowList;
