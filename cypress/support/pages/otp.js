 class otp{

  visit(){
       cy.visit('https://portal-dev.bayan.pe/retrieve_otp')
    }
    

  entermobileno(no){
        cy.get('.col-sm-12 > .ant-input').type(no)
     }
    radiobuttons(){
        cy.get('.ant-radio-wrapper-checked > :nth-child(2)').click()
    }
    fetchotp(){
        cy.get('.ant-btn').click()
    }
    Footer(){
        cy.get('.ant-layout-footer').should('contain','Copyright © 2025 Fintech Edge Private Limited. All Rights Reserved')
    }
    usermanagment(){
        cy.get('.ant-menu-submenu-title').click()
    }
    // Admin(){
    //     cy.get('[style="font-size: 13px; margin-bottom: 0;"]').click()

    // }
    // profile(){
    //    cy.get('[routerlink="/profile"]').first().click()
       
    // }
  
    // signout(){
    //    cy.get('.ant-dropdown-menu > :nth-child(5)').click()
    // }

 }
 export default otp