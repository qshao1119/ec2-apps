import Ember from 'ember';
import STORE from '../utils/local-store';
import CONST from '../utils/constants';

var math = window.math;

export default Ember.Controller.extend({
  syncData: function() {
    var hist = this.get('hist');
    if (!hist) {
      return;
    }
    // save data
    STORE.save(CONST.CALC, this.get('hist'));
  }.observes('hist.@each'),

  actions: {
    evaluate: function(equation) {
    	try {
    		var result = math.eval(equation);
        var hist = this.get('hist');
        console.log('hist');
        console.log(hist);
    		hist.unshiftObject({equation:equation, result:result});
    		this.set('equation', '');
    	} catch (e) {
	    	this.set('equation', 'Invalid expression!!!');
    	}
    },

    copyEq: function(eq) {
      this.set('equation', eq);
    }
  }
});
