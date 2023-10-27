describe("PartnerLogos", () => {
  it("menampilkan daftar logo mitra", () => {
    cy.visit("/");

    cy.contains("Our Partnership :").should("be.visible");

    cy.get("img").should("be.visible");

    cy.get("img").each((logo) => {
      cy.wrap(logo).should("have.attr", "alt");
    });
  });
});
