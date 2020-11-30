import Component from "@glimmer/component";

export default class StationStopEtasComponent extends Component {
  sortedEtas = new Array();

  constructor(owner, args) {
    super(owner, args);
    // skip it's cuz on station-stop route I've no sorting so it's ok to sort here,
    // but on station I've the mixed etas sorted by the route, so just skip here
    if (!this.args.skipSortEtas) {
      this.sortedEtas = this.args.etas.sort((a, b) =>
        a.arrT.localeCompare(b.arrT)
      );
    }
  }
}
