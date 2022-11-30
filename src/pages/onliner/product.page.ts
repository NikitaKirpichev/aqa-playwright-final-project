import { expect, Locator, Page } from '@playwright/test';
import { PRODUCT_NAME } from '../../constants/onliner-product-name.const';

export class ProductPage{
    readonly page: Page;
    readonly productPageTitle: Locator;
    readonly descriptionArea: Locator;
    readonly addToCartButton: Locator;
    readonly cartButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.productPageTitle = page.locator('css=[class="catalog-masthead__title js-nav-header"]');
        this.descriptionArea = page.locator('.offers-description');
        this.addToCartButton = page.locator('.product-aside__button_cart');
        this.cartButton = page.locator('xpath = //*[@id="userbar"]/div[2]/div/a');
    }

    async checkSuccsesSearch(){
        await expect(this.productPageTitle).toHaveText(PRODUCT_NAME); 
    }

    async checkDescription(){
        await expect(this.descriptionArea).toBeVisible();
    }

    async addProductToCart(){
        await this.addToCartButton.first().click();
    }

    async naviagateToCartPage(){    
        await this.cartButton.click();
    }

    async addToCart(){
        await this.checkSuccsesSearch();
        await this.checkDescription();
        await this.addProductToCart();
    }
}
