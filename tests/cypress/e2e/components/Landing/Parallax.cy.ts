describe("Parallax", () => {
  it("menampilkan latar belakang dan teks dengan benar", () => {
    cy.visit("/");

    cy.get("section").should("be.visible");
    cy.get("section").should("have.css", "background-image");

    cy.contains("Stay Up-To-Date").should("be.visible");

    cy.contains(
      "Empowering you with real-time insights, our app is designed to keep your contact information up-to-date."
    ).should("be.visible");
  });
});
