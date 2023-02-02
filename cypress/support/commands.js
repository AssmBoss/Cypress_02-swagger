// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('createUser', (user) => {
    cy.request({
      method: "POST",
      url: "/user/createWithArray",
      body: user
    })
})

Cypress.Commands.add('loginUser', (user) => {
    cy.request({
      method: "GET",
      url: "user/login?username=" + user[0].username + "&password=" + user[0].password
    })
})

Cypress.Commands.add('updateUser', (user, userUpd) => {
    cy.request({ 
      method: "PUT",
      url: "user/" + user[0].username,
      body: userUpd
    })
})

Cypress.Commands.add('deleteUser', (user) => {
    cy.request({ 
      method: "DELETE",
      url: "user/" + user[0].username
    })
})