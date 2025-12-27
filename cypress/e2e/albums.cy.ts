describe('Albums API - showAlbums', () => {




  it('intercepts albums GET and returns mock fixture when visiting forms', () => {

    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/albums', { fixture: 'albums-mock.json' }).as('getAlbums');

    // Visit the form page where showAlbums() is called on init
   cy.visit('http://localhost:4200/forms');

    // Wait for the intercepted albums request and assert response
    cy.wait('@getAlbums').then((interception) => {
      expect(interception.response?.statusCode).to.eq(200);
      expect(interception.response?.body).to.be.an('array');
      expect(interception.response?.body.length).to.eq(3);
      expect(interception.response?.body[0].title).to.eq('Mock Album One');
    });
  });
});
