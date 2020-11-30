import JSONAPIAdapter from "@ember-data/adapter/json-api";

// SRC https://raw.githubusercontent.com/thomasjfox1/cta-stations/master/cta_stations.json
export default class StationAdapter extends JSONAPIAdapter {
  host = "https://raw.githubusercontent.com";
  namespace = "thomasjfox1/cta-stations/master";

  pathForType(type) {
    if (type === "station") return "cta_stations";

    return type;
  }

  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }

  ajaxOptions(url, type, options = {}) {
    options.crossDomain = true;
    options.dataType = "json";

    return super.ajaxOptions(url, type, options);
  }

  findAll(_store, type, snapshot) {
    const URL = this.buildURL(type.modelName, null, snapshot, "findAll");
    return this.ajax(URL, "GET");
  }

  findRecord(store, type, _id, snapshot) {
    return this.findAll(store, type, snapshot);
  }
}
