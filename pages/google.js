module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    searchBar: {
      selector: "input[type=text]"
    },
    submit: {
      selector: "input[type=submit]"
    },
    logo: {
      selector: "#logo"
    }
  }
};
