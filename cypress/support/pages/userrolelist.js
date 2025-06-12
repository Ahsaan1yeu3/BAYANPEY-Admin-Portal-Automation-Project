
class Userrolelist{

    visit(){
        cy.visit('https://portal-dev.bayan.pe/user-roles-list')
    }
    h1(){

        cy.get('h1').should('contain','User Roles')
    }
    h2(){
      cy.get('h2').should('contain','Track and manage registered users on the platform.')
    }
    createuserrole(){
        cy.get('.ant-btn > .ng-star-inserted').click()
    }
    role(role){
        cy.get('[style="margin-left: -8px; margin-right: -8px;"] > :nth-child(1) > .ant-input').type(role)

    }
    status(){
  cy.get('.ant-select-selector').click()
  cy.get('[title="Inactive"] > .ant-select-item-option-content').click()
    }
    allowedpermissions(){
        cy.get(':nth-child(2) > .ant-checkbox-wrapper > :nth-child(2)').click()
        cy.get(':nth-child(10) > .ant-checkbox-wrapper > :nth-child(2)').click()
    }
    // createrolebutton(){
    //     cy.get('.inner-box > .btn-primary > .ng-star-inserted').should('be.visible').click()
    // }
    cancelbutton(){
        cy.get('.btn-secondary > .ng-star-inserted').should('be.visible').click()
    }
     Totalcount(){
//     //cy.get('.ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container').should('contain','Total Count(s)')
     cy.contains('Total Count(s):').should('exist')

  }
   Footer(){
     cy.get('.ant-layout-footer').should('contain','Copyright © 2025 Fintech Edge Private Limited. All Rights Reserved')
  }
  logout(){
    cy.get('[style="font-size: 13px; margin-bottom: 0;"]').click()
    cy.get('.ant-dropdown-menu > :nth-child(5)').click()
  }
}
export default Userrolelist