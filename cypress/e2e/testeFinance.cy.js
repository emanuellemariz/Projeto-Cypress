describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
        cy.visit("https://dev-finance.netlify.app/");
        
        criarTransação("Hora Extra", 200)

        cy.get('tbody tr td.description').should("have.text", "Hora Extra");

    });



    it('Cadastrar uma entrada', () => {
        cy.visit("https://dev-finance.netlify.app/");

        criarTransação("Cinema", -45)

        cy.get('tbody tr td.description').should("have.text", "Cinema");

    });
});

function criarTransação(descrição, valor){

    cy.contains("Nova Transação").click();
    cy.get('#description').type(descrição);
    cy.get('#amount').type(valor);
    cy.get('#date').type("2023-05-13");
    cy.get('button').click();


}