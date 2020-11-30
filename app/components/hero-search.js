import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class HeroSearchComponent extends Component {
  searchFilters;

  constructor(owner, args) {
    super(owner, args);
    this.searchFilters = this.args.searchFilters;
  }

  @action updateSearchFilters() {
    if (this.searchFilters.q.length < this.args.minQueryLength) return;
    this.args.updateSearchFilters(this.searchFilters);
  }
}
