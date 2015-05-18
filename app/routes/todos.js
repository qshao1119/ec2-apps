import Ember from 'ember';
import STORE from '../utils/local-store';
import CONST from '../utils/constants';


export default Ember.Route.extend({
  setupController: function (controller, model) {
    var key = CONST.TODOS;
    var todos = STORE.load(key);

    // item in todos: {content: string, completed: boolean, createdOn: date, doneOn: date}

    if (!todos) {
      todos = [
        {content: 'task one', completed: false, createdOn: Date.parse('2015-05-10')},
        {content: 'task two', completed: true, createdOn: Date.parse('2015-05-11')},
        {content: 'task three', completed: true, createdOn: Date.parse('2015-05-12')},
        {content: 'task four', completed: false, createdOn: Date.parse('2015-05-13')}
      ];
    }
    console.log(CONST);
    console.log(todos);
    controller.set('model', model);
    controller.set('todos', todos);
  }
});