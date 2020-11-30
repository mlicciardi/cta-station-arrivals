import JSONSerializer from "@ember-data/serializer/json";

export default class StationStopEtaSerializer extends JSONSerializer {
  normalizeResponse(_store, _primaryModelClass, payload, id) {
    let jsonpPayload = {
      type: "station-stop-eta",
      id,
      attributes: payload.ctatt,
    };
    return { data: jsonpPayload };
  }
}
