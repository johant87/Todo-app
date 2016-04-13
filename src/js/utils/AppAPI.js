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
  }
}
