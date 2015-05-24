import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'views/bydate',
  items: function() {
    var completedByDates = this.get('completedByDates');
    var date = this.get('date');
    var todos = completedByDates[date];
    var items = [];
    for (var i = 0; i < todos.length; i++) {
      items.push(todos[i].content);
    }
    return items;
  }.property()
});
