import Model, { attr } from "@ember-data/model";

// useless since no relationship has been implemented in StationModel
export default class StationStopModel extends Model {
  @attr("number") STOP_ID;
  @attr("string") DIRECTION;
  @attr("string") STOP_NAME;
  @attr("string") STATION_DESCRIPTIVE_NAME;
  @attr("number") MAP_ID;
  @attr("boolean") ADA;
  @attr("boolean") RED;
  @attr("boolean") BLUE;
  @attr("boolean") GREEN;
  @attr("boolean") BROWN;
  @attr("boolean") PURPLE;
  @attr("boolean") PURPLE_EXPRESS;
  @attr("boolean") YELLOW;
  @attr("boolean") PINK;
  @attr("boolean") ORANGE;
  @attr("string") LOCATION;
}
