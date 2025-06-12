


class createrole{
    visit(){
        cy.visit('https://portal-dev.bayan.pe/create-user-roles')
    }
    h1(){
        cy.get('h1').should('contain','Create User Roles')
    }
    h2(){
        cy.get('h2').should('contain','Create & Manage User Roles')
    }
    RoleTitle(roletitle){
        cy.get('.gutter-row > .ant-input').type(roletitle)
    }
    AllowedPermission()
{
    cy.get('.ant-select-selector').click()
   cy.get('[title="Transactions"] > .ant-select-item-option-content').click()
cy.get('[title="Onboarded Customers"] > .ant-select-item-option-content').click()
cy.get('body').type('{esc}') // ESC key press to close dropdown

}
AdditionalPermission(){
    cy.get(':nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check()
    cy.get(':nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check()
}
createroleb(){
    cy.get('.btn-primary > .ng-star-inserted').click()
}
}


export default createrole