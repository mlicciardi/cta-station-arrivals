import Model, { attr } from "@ember-data/model";

export default class StationModel extends Model {
  @attr("string") STATION_NAME;
  @attr STOPS; // @hasMany("station-stop") STOPS;
}
