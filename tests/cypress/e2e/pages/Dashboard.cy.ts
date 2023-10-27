// cypress/integration/dashboard.spec.js
describe("Dashboard", () => {
  beforeEach(() => {
    cy.visit("/dashboard");
  });

  it("menampilkan halaman dashboard dengan benar", () => {
    cy.get("h1").contains("Your Messages").should("be.visible");

    cy.contains("Send private photos and messages to a friend or group").should(
      "be.visible"
    );

    cy.get("button").contains("Add Contact").should("be.visible");
  });

  it("mengeklik tombol 'Add Contact' dan menuju ke '/create-contact'", () => {
    cy.get("button").contains("Add Contact").click();

    cy.url().should("include", "/create-contact");
  });
});
