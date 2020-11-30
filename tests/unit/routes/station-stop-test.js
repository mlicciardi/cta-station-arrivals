import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | station-stop', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:station-stop');
    assert.ok(route);
  });
});
