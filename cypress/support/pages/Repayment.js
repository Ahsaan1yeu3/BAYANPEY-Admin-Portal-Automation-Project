
class Repayment{
    visit(){
       cy.visit ('https://portal-dev.bayan.pe/repayments')
    }
    h1(){
        cy.get('.col-sm-12 > h1').should('contain','Repayments')

    }
    h2(){
        cy.get('h2').should('contain','Monitor and process pending and completed repayments.')

    }
    search(superstore){
        cy.get('.row > :nth-child(1) > .searchbar > .ant-input-affix-wrapper').type(superstore).click()
    }
    paymentverified(){
        cy.get('.col-md-3.d-flex > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').click()
        cy.get('.ant-select-item-option-active').eq(0).click()
    }
selectpaymentmethod(){
  
  cy.get('.ant-select.ng-tns-c146563758-5 > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').click()
    cy.get('.ant-select-item-option-active > .ant-select-item-option-content').eq(0).click()
}
paymentstatus(){
    cy.get('.ant-select.ng-tns-c146563758-5 > .ant-select-selector').click()
  cy.get('.ant-select-item-option-selected > .ant-select-item-option-content').eq(0).click()
}
clearfilter(){
    cy.get(':nth-child(6) > div > .ant-btn').click()
}
Totalcount(){
    //cy.get('.ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container').should('contain','Total Count(s)')
    cy.contains('Total Count(s):').should('exist')

 }
 Footer(){
    cy.get('.ant-layout-footer').should('contain','Copyright © 2025 Fintech Edge Private Limited. All Rights Reserved')
 }
}
export default Repayment