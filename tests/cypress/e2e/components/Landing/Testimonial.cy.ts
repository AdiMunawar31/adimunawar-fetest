describe("Testimonial", () => {
  it("menampilkan testimonial dengan benar", () => {
    cy.visit("/");

    cy.contains("What clients saying").should("be.visible");

    cy.contains(
      "Using DiContact management app has been nothing short of a game-changer."
    ).should("be.visible");

    cy.get("img").should("be.visible");

    cy.contains("Adi Munawar").should("be.visible");
    cy.contains("Software Dev").should("be.visible");
  });
});
