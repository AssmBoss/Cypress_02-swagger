let user = require('../fixtures/user.json')
let userUpd = require('../fixtures/updateUser.json')

describe('PetStore test', () => {
  it('should creates user', () => {
    cy.createUser(user)
    .then((response)=>{
      cy.log(JSON.stringify(response.headers.date))
      expect(response.status).to.eq(200) 
    })
  })

  it('should logins user', () => {
    cy.createUser(user)
      .then(()=>{
        cy.loginUser(user)
        .then((response)=>{
        expect(response.status).to.eq(200) 
      })
    })  
  })

  it('should updates user', () => {
    cy.createUser(user)
    .then(()=>{
      cy.loginUser(user)
      .then(()=>{
        cy.updateUser(user, userUpd)
        .then((response)=>{
          expect(response.status).to.eq(200)
        })
      })
    })  
  })

  it('should deletes user', () => {
    cy.createUser(user)
    .then(()=>{
      cy.loginUser(user)
      .then(()=>{
        cy.deleteUser(user)
        .then((response)=>{
          expect(response.status).to.eq(200)
        })
      })
    })  
  })
})