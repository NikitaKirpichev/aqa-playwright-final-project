import { expect, Locator, Page } from '@playwright/test';
import { PRODUCT_NAME } from '../../constants/onliner-product-name.const';

export class CartPage{
    readonly page: Page;
    readonly productInfo: Locator;
    readonly deleteButton: Locator;
    readonly cartMessageTitle: Locator;

    constructor(page: Page){
        this.page = page;
        this.productInfo = page.locator('.cart-form__offers-part_data');
        this.deleteButton = page.locator('.cart-form__button_remove');
        this.cartMessageTitle = page.locator('.cart-message');
    }

    async checkProductInCart(){
        await expect(this.productInfo).toContainText(PRODUCT_NAME);
    }

    async hoverOverProduct(){
        await this.page.hover('.cart-form__body');
    }

    async clickDeleteButton(){
        await this.deleteButton.click();
    }

    async clickCloseButton(){
        await this.page.getByText('Закрыть').click();
    }

    async getMessageAfterDelete(){
        await expect(this.cartMessageTitle).toContainText('Ваша корзина пуста');
    }

    async deleteProduct(){
        await this.checkProductInCart();
        await this.hoverOverProduct();
        await this.clickDeleteButton();
        await this.clickCloseButton();
        await this.getMessageAfterDelete();
    }
}