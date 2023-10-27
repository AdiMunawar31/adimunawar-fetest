describe("ContactList", () => {
  it("menampilkan detail kontak", () => {
    cy.visit("/dashboard");

    cy.get(".contact-item").first().as("contactItem");

    cy.get("@contactItem").should("be.visible");
    cy.get("@contactItem").find("img").should("be.visible");
    cy.get("@contactItem").find("h3").should("be.visible");
    cy.get("@contactItem").find("span").should("be.visible");
  });

  it("menampilkan menu tindakan", () => {
    cy.visit("/dashboard");

    cy.get(".contact-item").first().as("contactItem");

    cy.get("@contactItem").find("button").should("be.visible");

    cy.get("@contactItem").find("button").click();

    cy.get(".contact-item .absolute").should("be.visible");

    cy.get(".contact-item .absolute").contains("Edit").should("be.visible");
    cy.get(".contact-item .absolute").contains("Delete").should("be.visible");
  });
});
