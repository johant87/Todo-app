var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    addList: function(list){
      AppDispatcher.handleViewAction({
        actionType: AppConstants.ADD_LIST,
        list: list
      });
    },
    receiveLists: function(lists){
      AppDispatcher.handleViewAction({
        actionType: AppConstants.RECEIVE_LISTS,
        lists: lists
    });
  }
}

module.exports = AppActions;
