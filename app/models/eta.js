import Model, { attr } from "@ember-data/model";

// useless since no relationship has been implemented in StationStopEtaModel
export default class EtaModel extends Model {
  @attr("string") staId;
  @attr("string") stpId;
  @attr("string") staNm;
  @attr("string") stpDe;
  @attr("string") rn;
  @attr("string") rt;
  @attr("string") destSt;
  @attr("string") destNm;
  @attr("string") trDr;
  @attr("string") prdt;
  @attr("string") arrT;
  @attr("string") isApp;
  @attr("string") isSch;
  @attr("string") isDly;
  @attr("string") isFlt;
  @attr flags;
  @attr("string") lat;
  @attr("string") lon;
  @attr("string") heading;
}
