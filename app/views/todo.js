import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'views/todo',
  contentClass: function() {
    var todo = this.get('todo');
    if (todo.completed) {
      return 'todo-completed';
    }
    return '';
  }.property('todo.completed'),
  id: function() {
    var todo = this.get('todo');
    return todo.id;
  }.property('todo')

});
