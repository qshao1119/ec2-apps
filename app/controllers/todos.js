import Ember from 'ember';
import STORE from '../utils/local-store';
import CONST from '../utils/constants';
import UTIL from '../utils/utils';

function createNewTodo(content) {
  return {id: Math.random().toString(36).substring(8), content: content, completed: false, createdOn: new Date()};
}

export default Ember.Controller.extend({
  todos: [],

  syncData: function() {
    var todos = this.get('todos');
    if (!todos) {
      return;
    }

    var byDates = {}; // todos by completed date

    var count = 0; // active (not completed) todos
    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];
      if (!todo.completed) {
        count++;
        todo.completedDate = null;
      } else {
        var date = new Date();
        todo.completedDate = date;
        var dateString = UTIL.toDateString(date);
        if (dateString in byDates) {
          byDates[dateString].push(todo);
        } else {
          byDates[dateString] = [todo];
        }
      }
    }

    // completedByDate
    this.set('completedByDates', byDates);
    this.set('completedDates', Object.keys(byDates).sort().reverse());

    // active todos
    this.set('activeTodos', count);

    // save data
    STORE.save(CONST.TODOS, this.get('todos'));
  }.observes('todos.@each', 'todos.@each.completed'),

  actions: {
    insertTodo: function() {
      var todos = this.get('todos');
      var todo = createNewTodo(this.get('newItem'));
      todos.unshiftObject(todo);
      this.set('newItem', '');
      console.log("insert new todo");
    },

    deleteTodo: function (todo) {
      var todos = this.get('todos');
      todos.removeObject(todo);
    }

  }
});
