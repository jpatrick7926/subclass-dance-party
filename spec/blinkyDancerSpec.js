describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('shiftyDancer', function() {

  var shiftyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shiftyDancer = new makeShiftyDancer(50, 10, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shiftyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node shift', function() {
    sinon.spy(shiftyDancer.$node, 'animate');
    shiftyDancer.step();
    expect(shiftyDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(shiftyDancer, 'step');
      expect(shiftyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shiftyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shiftyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('rotateDancer', function() {

  var rotateDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rotateDancer = new makeRotateDancer(30, 40, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rotateDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node rotate', function() {
    sinon.spy(rotateDancer.$node, 'rotate');
    rotateDancer.step();
    expect(rotateDancer.$node.rotate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rotateDancer, 'step');
      expect(rotateDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rotateDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rotateDancer.step.callCount).to.be.equal(2);
    });
  });
});
