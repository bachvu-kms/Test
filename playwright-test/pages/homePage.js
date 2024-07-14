import Page from './page'

class HomePage extends Page {
  constructor() {
    super();
  }

  elements = {
    lblHeader: () => cy.get('div:not(.grid-title) > h1'),
    lnkUserAccount: () => cy.get('#user-account-link'),
    lnkSignOut: () => cy.get('#sign-out-link')
  }

  logOut() {
    this.log('Log out');
    this.elements.lnkUserAccount().click();
    this.elements.lnkSignOut().click();
  }

}

const homePage = new HomePage();
export { homePage };
