import Route from "@ember/routing/route";
import { hash, resolve } from "rsvp";
import { inject as service } from "@ember/service";
import { set } from "@ember/object";

export default class StationRoute extends Route {
  @service store;
  @service notify;

  station;
  sortedStops = new Array();
  sortedEtas = new Array();

  async model(params) {
    return this.store
      .findRecord("station", params.station_id)
      .then((station) => {
        this.etas = new Array();

        this.station = station;
        this.sortedStops = station.STOPS.sort((a, b) =>
          a.STOP_NAME.localeCompare(b.STOP_NAME)
        );

        let promises = {};
        this.sortedStops.forEach((stop) => {
          const id = stop.STOP_ID;
          promises[`stop-eta-${id}`] = resolve(
            this.store.findRecord("station-stop-eta", id).then((stop) => {
              if (!stop.eta) {
                const msg = `resolve failed for stop ${id}`;
                console.warn(msg);
                this.notify.alert(msg, { id });
              } else {
                stop.eta.forEach((eta) => this.sortedEtas.push(eta));
              }
            })
          );
        });

        return hash(promises).then(() => {
          this.sortedEtas = this.sortedEtas.sort((a, b) =>
            a.arrT.localeCompare(b.arrT)
          );
          return this.station;
        });
      });
  }

  async setupController(controller, model) {
    super.setupController(controller, model);

    set(controller, "station", this.station);
    set(controller, "sortedStops", this.sortedStops);
    set(controller, "sortedEtas", this.sortedEtas);
  }
}
