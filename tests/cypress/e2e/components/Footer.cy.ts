describe("Footer", () => {
  beforeEach(() => {
    cy.visit("/about");
  });

  it("should display 'Subscribe Now' button", () => {
    cy.get("a:contains('Subscribe Now')").should("be.visible");
  });

  it("should navigate to the homepage when the logo is clicked", () => {
    cy.get("#DiContact").click();

    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("should have the correct copyright notice", () => {
    cy.get("footer")
      .contains("© Copyright 2023. All Rights Reserved.")
      .should("be.visible");
  });
});
