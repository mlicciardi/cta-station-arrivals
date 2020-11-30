import Model, { attr } from "@ember-data/model";

export default class StationStopEtaModel extends Model {
  @attr("string") tmst;
  @attr("number") errCd;
  @attr("string") errNm;
  @attr eta; // @hasMany("eta") eta;
}
