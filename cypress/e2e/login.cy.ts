describe('Login flow', () => {
  it('user enters username and password and navigates to posts', () => {
    // Visit the forms (login) route
    cy.visit('http://localhost:4200/forms');

    // Type username and password using formControlName attributes
    cy.get('input[formControlName="username"]').type('testuser');
    cy.get('input[formControlName="password"]').type('P@ssw0rd');

    // Click the login button
    cy.get('button[type="submit"]').contains('LOGIN').click();

    // After submit, expect to be on /posts. If the app does not navigate, this will fail.
    cy.url().should('include', '/posts');

    // Also assert posts content exists
   // cy.get('h1, h2, h3').should('exist');
  });
});
