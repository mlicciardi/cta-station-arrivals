import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import { set } from "@ember/object";

export default class StationStopRoute extends Route {
  @service store;

  parentStationId;

  async model(params) {
    this.parentStationId = params.station_id;

    return this.store.findRecord("station-stop-eta", params.stop_id);
  }

  async setupController(controller, model) {
    super.setupController(controller, model);

    set(controller, "parentStationId", this.parentStationId);
  }
}
