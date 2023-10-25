describe("InputField Component", () => {
  it("should render the InputField component", () => {
    cy.visit("/create-contact");
    cy.get('input[name="firstName"]').should("exist");
    cy.get('label[for="firstName"]').should("exist");
  });

  it("should type text into the input field", () => {
    cy.visit("/create-contact");
    cy.get('input[name="firstName"]').should("exist");
    cy.get('label[for="firstName"]').should("contain", "First Name");
  });

  it("should display an error message", () => {
    cy.visit("/create-contact");
    cy.get('input[name="firstName"]').type("Invalid Input");
    cy.get(".text-red-500").should("exist");
  });
});
