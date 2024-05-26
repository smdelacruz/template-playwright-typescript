import { Page, Locator } from "playwright";

export class HomePage{
    readonly page : Page;
    readonly getSearchField : Locator;

    constructor(page: Page){
        this.page = page;
        this.getSearchField = page.getByRole('combobox', { name: 'q'});
    }

    async goToHomePageUrl(pageUrl: string){
        await this.page.goto(pageUrl);
    }

    async clickTryForFreeButton(){
        await this.getSearchField.click();
    }
}

export default HomePage;
