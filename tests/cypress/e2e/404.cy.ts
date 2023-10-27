describe("NotFound", () => {
  it("menampilkan pesan 404 dan tautan 'Go Home'", () => {
    cy.visit("/non-existent-page");

    cy.contains("404").should("be.visible");

    cy.contains("Page Not Found").should("be.visible");

    cy.contains("Go Home").should("be.visible");

    cy.contains("Go Home").click();

    cy.url().should("include", "/");
  });
});
