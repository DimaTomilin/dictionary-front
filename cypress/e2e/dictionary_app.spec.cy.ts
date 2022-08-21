describe('Frontend ui testing', function () {
  this.beforeAll(() => {
    cy.visit('http://localhost:3001');
  });

  it('Front page can be opened', function () {
    cy.contains('Search Word');
    cy.contains('Find random word by part of speech');
  });

  it('Sidebar menu can be opened and closed', function () {
    cy.get('.offcanvas-header').should('not.exist');
    cy.get('.sidebar').click({ force: true });
    cy.contains('Dictionary Menu');
    cy.get('.btn-close').click({ force: true });
    cy.get('.offcanvas-header').should('not.exist');
  });

  it('Alert message can be closed', function () {
    cy.contains('If you want to find word you can made Ctrl+click on it');
    cy.get('.closebtn').click({ force: true });
    cy.contains('If you want to find word you can made Ctrl+click on it').should('not.exist');
  });

  it('Theme can be changed', function () {
    cy.get('.App').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('.slider').click({ force: true });
    cy.get('.App').should('have.css', 'background-color', 'rgb(100, 99, 99)');
    cy.get('.slider').click({ force: true });
    cy.get('.App').should('have.css', 'background-color', 'rgb(255, 255, 255)');
  });
});

describe('Check simplest usage of application', function () {
  this.beforeAll(() => {
    cy.visit('http://localhost:3001');
  });

  it('Search word and render of word page', function () {
    cy.get('[placeholder="Enter word"]').type('cat');
    cy.contains('Find').click({ force: true });
    cy.contains('Cat');
    cy.get('.part-of-speech').should('have.length', 2);
  });

  it('Go back to search page', function () {
    cy.contains('To main page').click({ force: true });
    cy.contains('Search Word');
  });

  it('Search word with specific part-of-speech and render of word page', function () {
    cy.get('[placeholder="Enter word"]').type('cat', { force: true });
    cy.get('.form-select').first().select('Noun', { force: true });
    cy.contains('Find').click({ force: true });
    cy.contains('Cat');
    cy.get('.part-of-speech').should('have.length', 1).should('have.text', 'Noun');
  });

  it('Go back to search page with sidebar menu', function () {
    cy.get('.sidebar').click({ force: true });
    cy.contains('Home').click({ force: true });
    cy.contains('Search Word');
    cy.get('.offcanvas-header').should('not.exist');
  });

  it('Search random word by part of speech', function () {
    cy.get('.form-select').last().select('Noun', { force: true });
    cy.get('.btn-info').last().click({ force: true });
    cy.wait(4000);
    cy.get('.part-of-speech').should('have.text', 'Noun');
    cy.contains('To main page').click({ force: true });
  });

  it('Search random word by part of speech and letter', function () {
    cy.get('.form-select').last().select('Noun', { force: true });
    cy.get('[placeholder="First letter(Optional)"]').type('t', { force: true });
    cy.get('.btn-info').last().click({ force: true });
    cy.wait(4000);
    cy.get('.part-of-speech').should('have.text', 'Noun');
    cy.get('h2').contains(/^T/);
  });
});

describe('Advanced usage of the app + features', function () {
  this.beforeAll(() => {
    cy.visit('http://localhost:3001');
  });

  it('Insert url and check if i will get word', function () {
    cy.visit('http://localhost:3001/dictionary/mother');
    cy.contains('Mother');
    cy.get('.part-of-speech').should('have.length', 3);
  });

  it('Insert url and check if i will get word with part of speech', function () {
    cy.visit('http://localhost:3001/dictionary/mother/verb');
    cy.contains('Mother');
    cy.get('.part-of-speech').should('have.length', 1).should('have.text', 'Verb');
  });

  it('Check if i can find randow word by inserting url', function () {
    cy.visit('http://localhost:3001/dictionary/part-of-speech/verb');
    cy.wait(4000);
    cy.get('.part-of-speech').should('have.text', 'Verb');
    cy.visit('http://localhost:3001/dictionary/part-of-speech/verb?letter=d');
    cy.wait(4000);
    cy.get('.part-of-speech').should('have.text', 'Verb');
    cy.get('h2').contains(/^D/);
    cy.visit('http://localhost:3001/history');
  });

  it('Check working history', function () {
    cy.visit('http://localhost:3001/dictionary/mother');
    cy.contains('To main page').click({ force: true });
    cy.visit('http://localhost:3001/dictionary/cat');
    cy.contains('Cat');
    cy.visit('http://localhost:3001/dictionary/dog');
    cy.contains('Dog');
    cy.visit('http://localhost:3001/dictionary/trip');
    cy.contains('Trip');
    cy.visit('http://localhost:3001/dictionary/also');
    cy.contains('Also');
    cy.get('.sidebar').click({ force: true });
    cy.contains('History').click({ force: true });
    cy.get('h5').should('have.length', 5);
    cy.contains('Also').click({ force: true });
    cy.contains('Also');
    cy.get('.sidebar').click({ force: true });
    cy.contains('History').click({ force: true });
    cy.get('.history-element').first().find('h5').should('have.text', 'Also');
    cy.get('.history-element').first().next().find('h5').should('have.text', 'Also');
    cy.get('h5').should('have.length', 6);
  });
});
