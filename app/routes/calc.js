import Ember from 'ember';
import STORE from '../utils/local-store';
import CONST from '../utils/constants';

export default Ember.Route.extend({
  setupController: function (controller) {
    var key = CONST.CALC;
    var hist = STORE.load(key);
    if (!hist) {
      hist = [
      ];
    }
    controller.set('hist', hist);
  }
});
