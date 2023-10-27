describe("HeroSection", () => {
  it("menampilkan teks judul", () => {
    cy.visit("/");

    cy.get("h1").should("be.visible");
    cy.contains("Connecting Lives, One Contact at a Time.").should(
      "be.visible"
    );
  });

  it("menampilkan deskripsi dan fitur", () => {
    cy.visit("/");

    cy.get("p").should("be.visible");
    cy.get(".block.font-semibold.text-gray-500").should("be.visible");

    cy.get('[aria-label="add to slack"]').should("be.visible");
    cy.get('[aria-label="add to chat"]').should("be.visible");
    cy.get('[aria-label="add to zoom"]').should("be.visible");
  });

  it("menampilkan gambar ilustrasi", () => {
    cy.visit("/");

    cy.get("img").should("be.visible");
  });
});
