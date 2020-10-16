describe("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('contains "Leaderboard" text', () => {
    cy.get("[data-cy=headline]").contains("Leaderboard");
  });

  it('typing on "name" input', () => {
    cy.get("#card").find("input[type=text]").type("Fran", { force: true });
  });

  it('Find "Try your luck" button', () => {
    cy.get("[data-cy=generate]").contains("Try your luck");
  });

  it("Button generate decrease the counter", () => {
    cy.get("[data-cy=counter]").contains("You have 10 tries left.");
    cy.get("[data-cy=generate]").click();
    cy.get("[data-cy=counter]").contains("You have 9 tries left.");
  });

  it('Find "Send it!" button', () => {
    cy.get("[data-cy=submit]").contains("Send it!");
  });
});
