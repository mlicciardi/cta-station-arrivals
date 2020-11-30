import Component from "@glimmer/component";
import { computed } from "@ember/object";

export default class StationComponent extends Component {
  @computed("station")
  get stationLines() {
    let lines = {};
    this.args.station.STOPS.map((stop) => {
      if (stop.ADA) lines["ADA"] = "ADA";
      if (stop.BLUE) lines["BLUE"] = "BLUE";
      if (stop.BROWN) lines["BROWN"] = "BROWN";
      if (stop.GREEN) lines["GREEN"] = "GREEN";
      if (stop.ORANGE) lines["ORANGE"] = "ORANGE";
      if (stop.PINK) lines["PINK"] = "PINK";
      if (stop.PURPLE_EXPRESS) lines["PURPLE_EXPRESS"] = "PURPLE_EXPRESS";
      if (stop.PURPLE) lines["PURPLE"] = "PURPLE";
      if (stop.RED) lines["RED"] = "RED";
      if (stop.YELLOW) lines["YELLOW"] = "YELLOW";
    });

    return Object.keys(lines);
  }
}
