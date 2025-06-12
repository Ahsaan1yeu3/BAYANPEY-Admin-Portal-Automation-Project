
class OnboardedPage{
    
    h1(){
    cy.get('.col-sm-12 > h1').should('contain','Customer Management')
    }
    h2(){
        cy.get('h2').should('contain','Track and manage registered customers on the platform.')
    }
    
    search(customername){
        cy.get('.row > :nth-child(1) > .searchbar > .ant-input-affix-wrapper > .ant-input').type(customername).click()
    }
    dropdown(option){
        cy.get('.ant-select-selector').click()
    
       cy.get('.ant-select-item-option-active > .ant-select-item-option-content').eq(0).click()
      
    }
    clearfilter(){
        cy.get(':nth-child(4) > div > .ant-btn').click()
    }
    customerlist(){
        cy.get('.export > :nth-child(1) > h1').should('contain','Customers List')
        
    }
    exportcsv(){
        
        cy.get(':nth-child(2) > .ant-btn > .ng-star-inserted').click()
    }
    
    Footer(){
       cy.get('.ant-layout-footer').should('contain','Copyright © 2025 Fintech Edge Private Limited. All Rights Reserved') 
    }
}


    export default OnboardedPage;