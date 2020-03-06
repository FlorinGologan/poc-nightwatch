module.exports = {
  Test: function(browser) {
    const step1 = browser.page.step1();
    const step2 = browser.page.step2();

    step1
      .navigate()
      .assert.title("Google")
      .assert.visible("@searchBar")
      .setValue("@searchBar", "nightwatch");

    browser.execute("scrollTo(0,3000)");

    step1.waitForElementVisible("@submit", 5000).click("@submit");

    step2.waitForElementVisible("@logo", 5000);

    browser.end();
  }
};
