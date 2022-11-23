import { expect, Locator, Page } from '@playwright/test';

export class ProductPage{
    readonly page: Page;
    readonly addToCartButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.addToCartButton = page.locator('#add-to-cart-button');
    }
    
    async addToCart(){
        await this.addToCartButton.click();
    }

    async checkSuccsesAddingToCart(){
        await expect(this.page.locator('css=[class="a-size-medium-plus a-color-base sw-atc-text a-text-bold"]')).toContainText('Added to Cart')
    }
}