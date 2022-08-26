///<reference types="Cypress" />

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('test accessibility', () => {
    // find and click open modal button
    cy.get('button').contains('open modal').click();

    // find the modal and assert it is open
    cy.findByRole('dialog')
      .should('exist')
      .should('have.attr', 'aria-modal', 'true');

    // find the content of the modal and assert the are available on page
    cy.focused().should('have.class', 'cancel-button');
    cy.get('link').should('have.length', 3);

    // tab through the modal and assert the focus is trapped inside the modal
    cy.tab().tab().tab();
    cy.tab();

    // tab one last time to return focus to the close button
    cy.focused().should('have.class', 'cancel-button');
    cy.tab({ shift: true });

    // cy.get('button').contains('open modal').should('have.focus');
    cy.get('body').trigger('keydown', { keyCode: 27 });

    // cy.wait(500);

    cy.get('button').contains('open modal').should('have.focus');
  });
});
