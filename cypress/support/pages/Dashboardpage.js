class Dashboardpage {
  h1() {
    cy.get('h1', { timeout: 10000 }).should('contain','Dashboard') // removed extra space
  }

  h2() {
    cy.get('h2').should('contain', 'View key insights and manage overall platform activities')
  }

  TotalCustomers() { cy.get(':nth-child(2) > :nth-child(1) > .card', { timeout: 10000 })
    .should('contain', 'Total Customers')
    .should('contain', 'Total Onboarded Customers')
    
  }

  TotalOrders() {
    cy.get(':nth-child(2) > :nth-child(2) > .card').should('contain', 'Total Orders')
  }

  TotalTransaction() {
  cy.contains('.card', 'Total Transactions', { timeout: 10000 })
    .should('contain', 'Transactions Amount')
}

  

  TotalRepayments() {
    cy.get(':nth-child(2) > :nth-child(4) > .card').should('contain', 'Total Repayments')
  }

  RepaymentStatus() {
    cy.get(':nth-child(3) > :nth-child(1) > .card')
      .should('contain', 'Repayment Status')
      .should('contain', 'Paid')
      .should('contain', 'Rejected')
  }

  AverageOrderAmount() {
    cy.get(':nth-child(3) > :nth-child(2) > .card').should('contain', 'Average Order Amount Over Time')
  }

  RepaymentsOverTime() {
    cy.get(':nth-child(4) > :nth-child(1) > .card').should('contain', 'Repayments Over Time')
  }

  OrdersOverTime() {
    cy.get(':nth-child(4) > :nth-child(2) > .card').should('contain', 'Orders Over Time')
  }

  UserRolesDistribution() {
    cy.get(':nth-child(4) > :nth-child(3) > .card')
      .should('contain', 'User Roles Distribution')
      .should('contain', 'Burque Admin')
      .should('contain', 'Portal Admin')
  }

  FinanceAccountOverTime() {
    cy.get(':nth-child(4) > :nth-child(4) > .card')
      .should('contain', 'Financed Amount Over Time')
      .should('contain', '30000')
      .should('contain', '25000')
  }

  Footer() {
    cy.get('.ant-layout-footer').should(
      'contain',
      'Copyright © 2025 Fintech Edge Private Limited. All Rights Reserved'
    )
  }

}

export default Dashboardpage
