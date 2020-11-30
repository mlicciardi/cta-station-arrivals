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
              if (!stop || !stop.eta) {
                // I've noticed that sometimes it fails so ... let's add a notification
                const msg = `Resolve failed for stop ${id}`;
                console.warn(msg);
                this.notify.alert(msg, { id });
              } else {
                // this shouldnt be here but why not annoy the tester?
                this.notify.info(`Resolved for stop ${id}`, { id });
                // push without mercy, they are going to be sorted on the promise cb
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

    // model in this controller is quite useless so let's use these objs
    set(controller, "station", this.station);
    set(controller, "sortedStops", this.sortedStops);
    set(controller, "sortedEtas", this.sortedEtas);
  }
}
