import JSONSerializer from "@ember-data/serializer/json";

export default class StationStopEtaSerializer extends JSONSerializer {
  normalizeResponse(_store, _primaryModelClass, payload, id) {
    // same quick "parse" to jsonp
    let jsonpPayload = {
      type: "station-stop-eta",
      id,
      attributes: payload.ctatt,
    };
    return { data: jsonpPayload };
  }
}
