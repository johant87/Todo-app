var AppActions = require('../actions/AppActions')

module.exports = {
  addList: function(list){
      $.ajax({
        url:"https://todo-api-johan.herokuapp.com/lists.json",
        data: JSON.stringify(list),
        type: "POST",
        contentType: "application/json",
        dataType: "json"
      });
  },
  getLists: function(){
    $.ajax({
      url:"https://todo-api-johan.herokuapp.com/lists.json",
      dataType: "json",
      cache: false,
      success: function(data){
          AppActions.receiveLists(data);
      }.bind(this),
      error: function(xhr, status, err){
          console.log(err)
      }.bind(this)
    });
  }
}
