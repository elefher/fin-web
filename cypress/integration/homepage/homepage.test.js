import { When, Then } from "cypress-cucumber-preprocessor/steps";
import '@testing-library/cypress/add-commands';

When("I navigate to {string}", (url) => {
    cy.visit(url);
});

Then("I see the page says {string}", (title) => {
    cy.findByText(title);
});
