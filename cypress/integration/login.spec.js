describe('Login tests', () => {
  
  beforeEach(() => {
    cy.fixture('config.json').then((config) => {
      cy.visit(config["lms_host"]);
    });
  })

  it('allows admin user access', () => {
    cy.fixture('config.json').then((config) => {
      cy.contains('Sign in').click();
      cy.get('#login-email').type(config['user_email']);
      // TODO how to make sure this stays a secret and is not printed in the debug toolbar?
      cy.get('#login-password').type(config['user_password']);
      cy.get('.action').click();
      cy.contains(config['messages']['my_courses']);
      cy.contains('Discover New').click();
      cy.contains(config['course_title'] || config['messages']['no_result']);
    });
  })
  
  it('does not allow user access with incorrect password', () => {
    cy.fixture('config.json').then((config) => {
      cy.contains('Sign in').click();
      cy.get('#login-email').type(config['user_email']);
      cy.get('#login-password').type(config['user_password'] + "incorrect");
      cy.get('.action').click();
      cy.contains(config['messages']['no_signin']);
    });
  })
})