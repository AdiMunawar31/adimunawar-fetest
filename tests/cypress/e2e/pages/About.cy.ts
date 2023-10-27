describe("About", () => {
  it("menampilkan informasi 'About' dengan benar", () => {
    cy.visit("/about");

    cy.url().should("include", "/about");

    cy.contains("Adi Munawar Frontend").should("be.visible");
    cy.contains("(DiContact)").should("be.visible");

    cy.contains(
      "Using this contact management app has been nothing short of a game-changer."
    ).should("be.visible");

    cy.contains(
      "Not only does this app simplify my life, but it also enhances my productivity."
    ).should("be.visible");

    cy.contains(
      "Furthermore, the app's seamless communication capabilities have strengthened my professional relationships."
    ).should("be.visible");
  });
});
