import Controller from "@ember/controller";
import { computed, action } from "@ember/object";

export default class IndexController extends Controller {
  minQueryLength = 2;
  searchFilters = { q: "" };

  @computed.filter("model", ["searchFilters.q"], function (item) {
    if (!this.searchFilters || !this.searchFilters.q) return true;
    if (this.searchFilters.q.length < this.minQueryLength) return true;

    let stationName = item.STATION_NAME;
    stationName = stationName.toLowerCase();

    let q = this.searchFilters.q;
    q = q.toLowerCase();

    return stationName.includes(q);
  })
  filteredStations;

  @action
  updateSearchFilters(searchFilters) {
    this.set("searchFilters", searchFilters);
  }
}
