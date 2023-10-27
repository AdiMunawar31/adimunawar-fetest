describe("CreateContact", () => {
  it("menampilkan form tambah kontak dengan benar", () => {
    cy.visit("/create-contact");

    cy.get("form").should("be.visible");
    cy.get("label").should("have.length", 4);
    cy.get("input[type='text']").should("have.length", 3);
    cy.get("input[type='number']").should("have.length", 1);

    cy.get("button")
      .contains("Add Contact")
      .should("be.visible")
      .should("be.disabled");

    cy.get('input[name="firstName"]').type("John");
    cy.get('input[name="lastName"]').type("Doe");
    cy.get('input[name="age"]').type("31");
    cy.get('input[name="photo"]').type("https://example-photos.png");

    cy.get("button").contains("Add Contact").should("not.be.disabled");

    cy.get("form").submit();

    cy.url().should("include", "/create-contact");
  });
});
