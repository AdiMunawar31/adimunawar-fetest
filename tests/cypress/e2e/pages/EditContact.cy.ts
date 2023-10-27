describe("EditContact", () => {
  it("menampilkan form edit kontak dengan benar", () => {
    const contactId = "123";

    cy.visit(`/edit/${contactId}`);

    cy.get("form").should("be.visible");
    cy.get("label").should("have.length", 4);
    cy.get("input[type='text']").should("have.length", 3);
    cy.get("input[type='number']").should("have.length", 1);

    cy.get("button")
      .contains("Edit Contact")
      .should("be.visible")
      .should("be.disabled");

    cy.get('input[name="firstName"]').clear().type("Updated");
    cy.get('input[name="lastName"]').clear().type("Contact");
    cy.get('input[name="age"]').clear().type("32");
    cy.get('input[name="photo"]').clear().type("https://updated-photos.png");

    cy.get("button").contains("Edit Contact").should("not.be.disabled");

    cy.get("form").submit();

    cy.url().should("include", "/edit/123");
  });
});
