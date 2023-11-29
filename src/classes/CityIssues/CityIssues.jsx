const { commonIssueOptions } = require("./issueOptions.js");

class CityIssues {
  constructor() {
    this.issueOptions = [...commonIssueOptions];
  }

  addCustomIssue(description) {
    this.issueOptions.push(description);
  }

  getAllIssues() {
    return this.issueOptions;
  }
}

module.exports = { CityIssues };
