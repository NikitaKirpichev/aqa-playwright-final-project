import { FrameLocator, Locator, Page } from '@playwright/test';

export class HomePage{
    readonly page: Page;
    readonly searchInput: Locator;
    readonly firstProductLink: Locator;
    readonly searchIframeLink: FrameLocator;

    constructor(page: Page){
        this.page = page;
        this.searchInput = page.locator('.fast-search__input');
        this.firstProductLink = page.locator('ul.search__results>li');
        this.searchIframeLink = page.frameLocator("iframe.modal-iframe").locator('div.search__content-wrapper > ul > li > div');
    }

    async enterProductName(productName: string){
        await this.searchInput.fill(productName);
    }

    async navigateToProductPage(){
        await this.searchIframeLink.first().click();
    }
    
    async searchProduct(productName: string){
        await this.enterProductName(productName);
        await this.navigateToProductPage();
    }
}