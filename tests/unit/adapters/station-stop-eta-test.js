import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | station stop eta', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:station-stop-eta');
    assert.ok(adapter);
  });
});
