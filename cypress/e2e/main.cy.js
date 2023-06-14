describe('Main page test', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  })

  it('Input teste', () => {
    cy.visit('index.html');
    cy.get('.content-form').click();
    cy.get('[type="email"]').should('have.attr', 'type', 'email');
    cy.get('[type="password"]').should('have.attr', 'type', 'password');
    cy.get('.content-form').click();
  });

  it('Checkbox input test', () => {
    cy.get('[data-test="checkbox"]').should('have.attr', 'type', 'checkbox');
  });

  it('Image visible test', () => {
    cy.get('[data-test="image"]').should('be.visible')
  })

  it('Href teste', () => {
    cy.get('[data-test="new-register"]').should('have.attr', 'href','new-register.html')
  })
});