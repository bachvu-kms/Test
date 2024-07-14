import Page from "../page";

class GetStartedPopup extends Page {

  constructor() {
    super();
  }

  btnSkipSelector = 'a.introjs-skipbutton';

  elements = {
    btnSkip: () => cy.get(this.btnSkipSelector),
  }

  clickSkipButton() {
    this.log('Click Skip button');
    this.elements.btnSkip().click();
  }

  skipGetStartedPopupIfDisplayed() {
    this.log('Skip Get Started popup if displayed');
    cy.retryAction(() => {
      return cy.get('body').then(($body) => {
        const selector = this.btnSkipSelector;
        if ($body.find(selector).length && $body.find(selector).is(':visible')) {
          this.clickSkipButton();
          return cy.wrap(true);
        } else {
          return cy.wrap(false);
        }
      });
    }, 10, 500, false);
  }

}

const getStartedPopup = new GetStartedPopup();
export { getStartedPopup };
