describe("FeatureIcons", () => {
  it("menampilkan tautan dengan ikon", () => {
    cy.visit("/");

    cy.get('[aria-label="add to slack"]').should("be.visible");
    cy.get('[aria-label="add to chat"]').should("be.visible");
    cy.get('[aria-label="add to zoom"]').should("be.visible");
  });

  it("menghadapi interaksi hover", () => {
    cy.visit("/");

    cy.get('[aria-label="add to slack"]').trigger("mouseover");
    cy.get('[aria-label="add to slack"]').should(
      "have.css",
      "border-color",
      "rgb(229, 231, 235)"
    );

    cy.get('[aria-label="add to chat"]').trigger("mouseover");
    cy.get('[aria-label="add to chat"]').should(
      "have.css",
      "border-color",
      "rgb(229, 231, 235)"
    );

    cy.get('[aria-label="add to zoom"]').trigger("mouseover");
    cy.get('[aria-label="add to zoom"]').should(
      "have.css",
      "border-color",
      "rgb(229, 231, 235)"
    );
  });
});
