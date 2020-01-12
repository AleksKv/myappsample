export class BasePage {
    constructor(private path: string) {}
  
    async navigateTo() {
      return browser.url(this.path);
    }
  
    waitUntilRedirectedToAnotherUrl(url) {
      return browser.waitUntil(() => {
        return browser.getUrl() != url;
      }, 30000);
    }
  }