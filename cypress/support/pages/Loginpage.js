class Loginpage {

  visit() {
    cy.visit('https://portal-dev.bayan.pe/login')
  }

  enterusername(username) {
    cy.get('#username').type(username).should('have.value', username)
  }

  enterpassword(password) {
    cy.get('#password').type(password).should('have.value', password)
  }

  clicklogin() {
    cy.get('.btn').click().should('be.visible')
  }
}

export default Loginpage;