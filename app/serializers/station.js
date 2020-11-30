import JSONSerializer from "@ember-data/serializer/json";

export default class StationSerializer extends JSONSerializer {
  normalizeResponse(_store, _primaryModelClass, payload, id) {
    // since it'a raw json I'm going to to pretend to properly parse it to build the proper jsonp that the hamster loves
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
