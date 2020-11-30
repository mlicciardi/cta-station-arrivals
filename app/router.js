import EmberRouter from "@ember/routing/router";
import config from "cta-station-arrivals/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("station", { path: "/station/:station_id" });
  this.route("station-stop", { path: "/station/:station_id/stop/:stop_id/" });
});
