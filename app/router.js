import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('todos', { path: '/todos' });
  this.resource('calc', { path: '/calc' });
});

export default Router;
