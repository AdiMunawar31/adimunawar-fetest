describe("Landing", () => {
  it("menampilkan halaman landing dengan benar", () => {
    cy.visit("/");

    cy.get("nav").contains("DiContact").should("be.visible");

    cy.get("h1")
      .contains("Connecting Lives, One Contact at a Time.")
      .should("be.visible");
    cy.get('[aria-label="add to slack"]').should("be.visible");
    cy.get('[aria-label="add to chat"]').should("be.visible");
    cy.get('[aria-label="add to zoom"]').should("be.visible");

    cy.get("section").should("be.visible");
    cy.contains("Stay Up-To-Date").should("be.visible");
    cy.contains("Empowering you with real-time insights").should("be.visible");

    cy.contains("What clients saying").should("be.visible");
    cy.contains(
      "Using DiContact management app has been nothing short of a game-changer."
    ).should("be.visible");

    cy.get("footer")
      .contains("© Copyright 2023. All Rights Reserved.")
      .should("be.visible");
  });
});
