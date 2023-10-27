describe("Chat", () => {
  const contactId = "123";

  beforeEach(() => {
    cy.visit(`/chat/${contactId}`);
  });

  it("menampilkan foto profil dengan benar", () => {
    cy.get("img[alt='photo profile']").should("be.visible");
  });

  it("menampilkan info kontak dengan benar", () => {
    cy.get("span.text-lg").should("be.visible");
    cy.get("span.text-sm").should("be.visible");
  });

  it("menampilkan tombol aksi dengan benar", () => {
    cy.get("button").should("be.visible");
  });

  it("mengirim pesan dengan benar", () => {
    cy.get("input[placeholder='Write your message!']").should("be.visible");
    cy.get("button[aria-label='Send']").should("be.visible");

    cy.get("input[placeholder='Write your message!']").type("Halo, apa kabar?");
    cy.get("button[aria-label='Send']").click();
  });
});
