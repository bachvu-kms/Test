import Page from "./page";

class LoginPage extends Page {
  constructor(page) {
    super(page); // Truyền đối tượng page vào constructor của lớp cha
  }

  elements = {
    txtUsername: () => this.page.locator('//*[@name="userName"]'),
    txtPassword: () => this.page.locator('//*[@name="password"]'),
    btnSignIn: () => this.page.locator('//*[@name="submit"]'),
  }

  async open() {
    await this.log('Navigate to Login page');
    await super.open('https://demo.guru99.com/test/newtours/login.php');
  }

  async login(username, password) {
    await this.log(`Login with username: ${username}`);
    await this.elements.txtUsername().type(username);
    await this.elements.txtPassword().type(password);
    await this.elements.btnSignIn().click();
  }
}

export { LoginPage };
