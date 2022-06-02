import CadastroPage from '../Pages/CadastroPage'

describe('Validação sistema', () => {
    const cadastroPage = new CadastroPage()
    it('Cadastrando informações corretas', () => {
        cadastroPage.go()
        cadastroPage.buscarProduto('Dress')
        cadastroPage.confirmarProduto()
        

        cy.get('.icon-plus').click()
        cy.get('button[name="Submit"]').click()
        cy.get('.button-container a').click()
        
        cy.contains('p a[title="Proceed to checkout"] span', 'Proceed to checkout').click()
        
    })

})