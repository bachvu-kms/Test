class Page {
  constructor(page) {
    this.page = page;
  }

  async open(path) {
    await this.page.goto(path);
  }

  async log(message) {
    console.log(`[${this.constructor.name}] ${message}`);
  }
}

export default Page;
