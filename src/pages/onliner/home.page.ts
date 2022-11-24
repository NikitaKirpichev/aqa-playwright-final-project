import { expect, Locator, Page } from '@playwright/test';

export class HomePage{
    readonly page: Page;
    readonly searchInput: Locator;

    constructor(page: Page){
        this.page = page;
        this.searchInput = page.locator('.fast-search__input');
    }

    async enterProductName(productName: string){
        await this.searchInput.fill(productName);
    }
}