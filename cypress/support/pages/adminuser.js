class Adminuser{

    visit(){
   cy.visit('https://portal-dev.bayan.pe/admin_users')
    }

    h1(){
        cy.get('h1').should('contain','Admin Users')
    }
    h2(){
        cy.get('h2').should('contain','Track and manage registered users on the platform.')
    }
    Totaluser(){
        cy.get(':nth-child(1) > .card > .chart-container').should('contain','Total Users')
    }
    adminuser(){
        cy.get(':nth-child(2) > .card > .chart-container').should('contain','Admin Users')

    }
    addnewuser(){
       
        cy.get('.ant-btn > .ng-star-inserted').click()
       
    }
    Name(name){
        cy.get('.ant-col-lg-24 > .inner-box > .ant-form-item > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type(name)


    }
    Email(email){
        cy.get(':nth-child(2) > .inner-box > .ant-form-item > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type(email)

    }
 Designation(designation){
    cy.get(':nth-child(3) > .inner-box > .ant-form-item > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type(designation)

 }
 Password(password){
    cy.get(':nth-child(4) > .inner-box > .ant-form-item > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type(password)

 }
 ConfirmPassword(confirmpassword){
    cy.get(':nth-child(5) > .inner-box > .ant-form-item > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type(confirmpassword)

 }
 cancelbutton(){
    cy.get('.btn-secondary').click()
 }
 Totalcount(){
    //cy.get('.ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container').should('contain','Total Count(s)')
    cy.contains('Total Count(s):').should('exist')

 }
 Footer(){
    cy.get('.ant-layout-footer').should('contain','Copyright © 2025 Fintech Edge Private Limited. All Rights Reserved')
 }
}
export default Adminuser