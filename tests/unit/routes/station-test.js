import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | station', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:station');
    assert.ok(route);
  });
});
