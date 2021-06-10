/// <reference types="cypress" />

context('WJ test QA', () => {

    beforeEach(() => {

        cy.visit('http://wejump-automation-test.github.io/qa-test/');
        cy.location('pathname').should('eq', '/qa-test/');

    });

    it('Asserts the visibility of the buttons after click', () => {

        cy.log('Click and assert button One not be visible');
        cy.get('#panel_test_one #btn_one').click()
            .should('not.be.visible');

        cy.log('Click and assert button Two not be visible');
        cy.get('#panel_test_one #btn_two').click()
            .should('not.be.visible');

        cy.log('Click and assert button Four not be visible');
        cy.get('#panel_test_one #btn_link').click()
            .should('not.be.visible');

    });

    it('Asserts the visibility of the buttons inside "IFRAME BUTTONS" after click', () => {
        
        cy.log('Get iframe "iframe_panel_body"');
        cy.get('#iframe_panel_body > iframe').then(($iframe) => {

            const $body = $iframe.contents().find('body');
    
            cy.log('Click and assert button One not be visible');
            cy.wrap($body).find('#btn_one').click()
                .should('not.be.visible');

            cy.log('Click and assert button Two not be visible');
            cy.wrap($body).find('#btn_two').click()
                .should('not.be.visible');

            cy.log('Click and assert button Four not be visible');
            cy.wrap($body).find('#btn_link').click()
                .should('not.be.visible');

        });
    })

    it('Type into YourFirtName input (inside frame), click button and assert selenium image be visible', () => {  //função que verifica se os botons existem em outro local

        cy.log('Get iframe "iframe_panel_body_two"');
        cy.get('#iframe_panel_body_two > iframe').then(($iframe) => {

            const $body = $iframe.contents().find('body');

            cy.log('Get input and type value');
            cy.wrap($body).find('#first_name')
                .type('meu teste');

        });

        cy.log('Get iframe "iframe_panel_body"');
        cy.get('#iframe_panel_body > iframe').then(($iframe) => {

            const $body = $iframe.contents().find('body');

            cy.log('Click and assert button One not be visible');
            cy.wrap($body).find('#btn_one').click()
                .should('not.be.visible');

            cy.log('Check opt_three input checkbox');
            cy.wrap($body).find('#opt_three')
                .invoke('attr', 'checked', true);

            cy.log('Select ExempleTwo option');
            cy.wrap($body).find('#select_box').select('ExampleTwo')
                .should('have.value', 'option_two');
        })

        cy.log('Check if Selenium image be visible');
        cy.get('img[alt="selenium"]').should('be.visible');

    });

});
