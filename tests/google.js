module.exports = {
  Test: function(browser) {
    var google = browser.page.google();

    google
      .navigate()
      .assert.title("Google")
      .assert.visible("@searchBar")
      .setValue("@searchBar", "nightwatch");

    browser.execute("scrollTo(0,3000)");

    google
      .waitForElementVisible("@submit", 5000)
      .click("@submit")
      .waitForElementVisible("@logo", 5000);

    browser.end();
  }
};
