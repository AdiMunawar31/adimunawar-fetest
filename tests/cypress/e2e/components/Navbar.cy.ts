describe("Navbar", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show logo and navigation menu", () => {
    cy.get('img[alt="logo"]').should("be.visible");
    cy.contains("Home").should("be.visible");
    cy.contains("About").should("be.visible");
  });

  it("should navigate to the dashboard page when clicking the 'Dashboard' link", () => {
    cy.visit("/");
    cy.get("span[aria-label='Dashboard']").click();
    cy.url().should("include", Cypress.config().baseUrl + "/dashboard");
  });

  it("should navigate to the home page when clicking the 'Home' link", () => {
    cy.visit("/");
    cy.get("span[aria-label='Home']").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("should navigate to the about page when clicking the 'About' link", () => {
    cy.visit("/");
    cy.get("span[aria-label='About']").click();
    cy.url().should("include", Cypress.config().baseUrl + "/about");
  });
});
