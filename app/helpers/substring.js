import { helper } from "@ember/component/helper";

export default helper(function substring(params /*, hash*/) {
  let [string, start, end] = params;
  return string.substring(start, end);
});
