import JSONAPIAdapter from "@ember-data/adapter/json-api";

// SRC http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=6929a951181c458d8dcb7a4205dc9129&stpid=30162&outputType=JSON
export default class StationStopEtaAdapter extends JSONAPIAdapter {
  host = "http://lapi.transitchicago.com";
  namespace = "/api/1.0/ttarrivals.aspx";

  pathForType = () => "";

  buildURL(stationStopId) {
    const APIKey = "6929a951181c458d8dcb7a4205dc9129"; // should be part of the env
    const base = `${super.buildURL()}`;

    return `${base}?key=${APIKey}&stpid=${stationStopId}&outputType=JSON`;
  }

  ajaxOptions(url, type, options = {}) {
    options.crossDomain = true;
    options.dataType = "json";

    const op = super.ajaxOptions(url, type, options);

    return op;
  }

  findRecord(_store, _type, id) {
    const URL = this.buildURL(id);

    return this.ajax(URL, "GET");
  }
}
