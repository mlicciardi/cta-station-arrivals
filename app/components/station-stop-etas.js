import Component from "@glimmer/component";

export default class StationStopEtasComponent extends Component {
  sortedEtas = new Array();

  constructor(owner, args) {
    super(owner, args);

    if (!this.args.skipSortEtas) {
      this.sortedEtas = this.args.etas.sort((a, b) =>
        a.arrT.localeCompare(b.arrT)
      );
    }
  }
}
