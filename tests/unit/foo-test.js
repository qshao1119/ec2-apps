import Ember from "ember";
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
var App;

module('An Integration test', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, App.destroy);
  }
});

test("Page contents", function(assert) {
  assert.expect(0);
//  visit('/foos').then(function() {
//    assert.equal(find('.foos-list').length, 1, "Page contains list of models");
//    assert.equal(find('.foos-list .foo-item').length, 5, "List contains expected number of models");
//  });
});
