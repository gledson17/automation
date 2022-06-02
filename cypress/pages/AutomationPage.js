
class AutomationPage {

    go() {
        cy.visit('http://automationpractice.com')
    }

    buscarProduto(produto) {
        cy.get('input[id="search_query_top"]').type(produto)
        cy.get('form[id="searchbox"] button').click()
    }

    confirmarProduto(){
        cy.get('.left-block a [title="Printed Chiffon Dress"]').click()
    }

    mensagemEsperada(mensagem){
        cy.contains('.alert-error', mensagem).should('be.visible')
        //cy.get('.alert-error').should('have.text', mensagem)
    }

    mensagemSucesso() {
        var mensagemSucesso = {
            mensagem: 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        }
        cy.get('.swal2-container .swal2-html-container').should('have.text', mensagemSucesso.mensagem)
    }

    clicarBotao(){
        cy.get('.swal2-container button').contains('Fechar').click()
    }

}

export default AutomationPage;