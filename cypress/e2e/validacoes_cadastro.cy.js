describe('Validações na tela de cadastro', () => {
 
    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/')
            .get('.right_list_fix > :nth-child(2) > a')
            .click()
    })
 
    it('Visualizar mensagem de erro, ao submeter o forms com o nome vazio', () => {
        cy.get('#btnRegister')
            .click()
 
        cy.get('#errorMessageFirstName')
            .should('be.visible')
    })
 
    it('Visualizar mensagem de erro, ao submeter o forms com o email vazio', () => {
        cy.get('#user')
            .type('Fernando')
 
        cy.get('#btnRegister')
            .click()
 
        cy.get('#errorMessageFirstName')
            .should('be.visible')
    })
 
    it('Visualizar mensagem de erro, ao submeter o forms com o email inválido', () => {
        cy.get('#user')
            .type('Fernando')
 
        cy.get('#email')
            .type('Fernando.com')
 
        cy.get('#btnRegister')
            .click()
 
        cy.get('#errorMessageFirstName')
            .should('be.visible')
    })
 
    it('Visualizar mensagem de erro, ao submeter o forms com a senha vazia', () => {
        cy.get('#user')
            .type('Fernando')
 
        cy.get('#email')
            .type('Fernando@gmail.com')
 
        cy.get('#btnRegister')
            .click()
 
        cy.get('#errorMessageFirstName')
            .should('be.visible')
    })
 
    it('Visualizar mensagem de erro, ao submeter o forms com a senha com menos de 6 digitos', () => {
        cy.get('#user')
        .type('Fernando')
 
         cy.get('#email')
             .type('Fernando@gmail.com')
 
        cy.get('#password')
            .type('1234')
 
        cy.get('#btnRegister')
            .click()
   
        cy.get('#errorMessageFirstName')
        .should('be.visible')
    })
 
 
    it.only('Cadastro sendo efetuado com sucesso, ao preecher os campos corretamente', () => {
        cy.get('#user')
            .type('Fernando')
 
        cy.get('#email')
            .type('Fernando@gmail.com')
 
        cy.get('#password')
            .type('123456')
       
        cy.get('#btnRegister')
            .click()
 
        cy.get('.swal2-popup')
            .should('contain', 'Cadastro realizado!')
    })
})