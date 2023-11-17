// Import necessary libraries
import 'cypress-axe';

// Function to check accessibility using aXe
Cypress.Commands.add('checkAccessibility', () => {
  cy.checkA11y();
});

// Cypress navigation test
describe('Navigation', () => {
  it('should navigate to About page', () => {
    cy.visit('/'); // Visit the homepage
    cy.contains('About').click(); // Click the "About" link
    cy.url().should('include', '/about'); // Verify the URL has changed to the About page
  });
});

// Accessibility test
describe('Accessibility', () => {
  it('should have no accessibility violations', () => {
    cy.visit('/');
    cy.checkAccessibility(); // Run accessibility checks on the current page
  });
});

// Performance test using Lighthouse CI
describe('Performance', () => {
  it('should have good performance scores', () => {
    cy.exec('yarn lhci collect --config lighthouse-ci-config.yml'); // Collect Lighthouse performance data
    cy.exec('yarn lhci upload --target lhci'); // Upload Lighthouse data
    cy.exec('yarn lhci assert'); // Assert performance scores against thresholds
  });
});

// SEO test using Pa11y
describe('SEO', () => {
  it('should have good SEO', () => {
    const pa11y = require('pa11y');
    const options = {
      standard: 'WCAG2AA', // Choose an appropriate accessibility standard
    };
    const testUrl = 'https://example.com'; // Replace with your website URL

    pa11y(testUrl, options)
      .then((results) => {
        expect(results.issues.length).to.equal(0); // Check for SEO issues
      })
      .catch(console.error);
  });
});
