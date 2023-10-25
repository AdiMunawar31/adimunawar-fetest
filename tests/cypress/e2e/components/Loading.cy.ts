describe("Loading", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show loading", () => {
    cy.visit("/about");
    cy.get("#loading").should("be.visible");
  });
});
