import JSONSerializer from "@ember-data/serializer/json";

export default class StationSerializer extends JSONSerializer {
  normalizeResponse(_store, _primaryModelClass, payload, id) {
    let jsonpPayload;
    if (id) {
      jsonpPayload = payload
        .filter((x) => x.STATION_NAME === id)
        .map((x) => ({
          type: "station",
          id: x.STATION_NAME,
          attributes: x,
        }))
        .find((x) => x.id === id);
    } else {
      jsonpPayload = payload.map((x) => ({
        type: "station",
        id: x.STATION_NAME,
        attributes: x,
      }));
    }

    return { data: jsonpPayload };
  }
}
