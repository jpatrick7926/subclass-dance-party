
var makeShiftyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);  
  this.left = left;
  this.top = top;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.step(timeBetweenSteps);
};

makeShiftyDancer.prototype = Object.create(makeDancer.prototype);
makeShiftyDancer.prototype.constructor = makeShiftyDancer;

makeShiftyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({left: this.left + 10 + 'px'});
  this.$node.animate({left: this.left - 10 + 'px'});

};