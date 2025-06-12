class Transaction{
    visit(){
        cy.visit('https://portal-dev.bayan.pe/transactions')
    }
    h1(){
        cy.get('.col-sm-12 > h1').should('contain','Transactions')
    }
    h2(){
        cy.get('h2').should('contain','View and manage all customer orders and transactions.')
    }
    filter(financingid){
        cy.get('.tb-filter > .searchbar > .ant-input-affix-wrapper').type(financingid).click()
    }
  search(){
    cy.get('.tb-filter-btn > :nth-child(1)').click()
  }
    clearfilter(){
       cy.get('.tb-filter-btn > :nth-child(2) > .ng-star-inserted').click()
    }
    export(){
        cy.get('.export > :nth-child(2) > .ant-btn > .ng-star-inserted').click()
    }
    Totalcount(){
    //cy.get('.ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container').should('contain','Total Count(s)')
    cy.contains('Total Count(s):').should('exist')

 }
  Footer(){
    cy.get('.ant-layout-footer').should('contain','Copyright © 2025 Fintech Edge Private Limited. All Rights Reserved')
 }
}
export default Transaction;