import Ember from 'ember';
import STORE from '../utils/local-store';
import CONST from '../utils/constants';


export default Ember.Route.extend({
  setupController: function (controller) {
    var key = CONST.TODOS;
    var todos = STORE.load(key);

    // item in todos: {content: string, completed: boolean, createdOn: date, doneOn: date}

    if (!todos) {
      todos = [
      ];
    }
    controller.set('todos', todos);
  }
});