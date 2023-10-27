describe("Sidebar", () => {
  beforeEach(() => {
    cy.visit("/dashboard");
  });

  it("menampilkan logo dan jumlah kontak", () => {
    cy.get('img[alt="logo"]').should("be.visible");
    cy.contains("Contacts").should("be.visible");
  });

  it('klik tombol "Shutdown"', () => {
    cy.get('[title="Shutdown"]').click();
    cy.url().should("include", "/");
  });

  it("menampilkan daftar kontak", () => {
    cy.get(".contact-list").should("be.visible");
    cy.get(".contact-list .contact-item").should("have.length.gte", 1);
    cy.get(".contact-list .contact-item", { timeout: 10000 }).should(
      "be.visible"
    );
  });
});
