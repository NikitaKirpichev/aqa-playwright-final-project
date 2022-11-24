import { expect, Locator, Page } from '@playwright/test';

export class SearchPage{
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly firstProductLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.searchInput = page.locator('#twotabsearchtextbox');
        this.searchButton = page.locator('#nav-search-submit-button');
        this.firstProductLink =  page.locator('css=[class="a-size-medium a-color-base a-text-normal"]').nth(0);
    }

    async enterProductName(productName: string){
        await this.searchInput.fill(productName);
    }
    
    async clickSearchButton(){
        await this.searchButton.click()
    }

    async checkSuccsesProductSearch(){
        await expect(this.page.locator('css=[data-component-type="s-search-results"]')).toHaveClass('rush-component s-latency-cf-section');
    }

    async navigateToProductPage(){
        await this.firstProductLink.click();
    }


    async searchProduct(productName: string){
        await this.enterProductName(productName);
        await this.clickSearchButton();
        await this.checkSuccsesProductSearch();
        await this.navigateToProductPage();
    }
}