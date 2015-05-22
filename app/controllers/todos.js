import Ember from 'ember';
import STORE from '../utils/local-store';
import CONST from '../utils/constants';

function createNewTodo(content) {
  return {id: Math.random().toString(36).substring(8), content: content, completed: false, createdOn: new Date()};
}

export default Ember.Controller.extend({
  todos: [],

  activeTodos: function() {
    var todos = this.get('todos');
    if (!todos) {
      return 0;
    }
    var count = 0;
    for (var i = 0; i < todos.length; i++) {
      if (!todos[i].completed) {
        count++;
      }
    }
    return count;
  }.property('todos.@each', 'todos.@each.completed'),

  updateStore: function() {
    STORE.save(CONST.TODOS, this.get('todos'));
    console.log('saved todos');
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
