class CustomerOrder{

    visit(){
  cy.visit('https://portal-dev.bayan.pe/customer-orders')
    }
    customersearch(orderid){
        cy.get('.row > :nth-child(1) > .searchbar > .ant-input-affix-wrapper > .ant-input').type(orderid).click()
    }
    selectdivision(){
        cy.get(':nth-child(3) > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').click()
        cy.get('.ant-select-item-option-content').eq(0).click()
        
        }
    selectsales(){
        cy.get(':nth-child(4) > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').click()
        cy.get('.ant-select-item-option-active > .ant-select-item-option-content').eq(0).click()
       
    }
     selectpayment(){
       cy.get(':nth-child(5) > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').click()
       cy.get('.ant-select-item-option-active > .ant-select-item-option-content').eq(0).click()
       
      
     }
     clearfilter(){
         cy.get(':nth-child(6) > div > .ant-btn > .ng-star-inserted').click()
      }
      exportcsv(){
        cy.get(':nth-child(2) > .ant-btn > .ng-star-inserted').click()
      }
     Totalcount(){
    //cy.get('.ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container').should('contain','Total Count(s)')
    cy.contains('Total Count(s):').should('exist')

 }
     Footer(){
         cy.get('.ant-layout-footer').should('contain','Copyright © 2025 Fintech Edge Private Limited. All Rights Reserved')

     }

}
export default CustomerOrder