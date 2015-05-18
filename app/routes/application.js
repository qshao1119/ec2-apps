import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function (e) {
    if (e.targetName === 'index') {
      this.transitionTo('todos');
    }
  }
});