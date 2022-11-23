import { expect, Locator, Page } from '@playwright/test';

export class HomePage{
    readonly page: Page;
    readonly signInLink: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly username: Locator;
    readonly cartLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.signInLink = page.locator('[data-nav-ref="nav_custrec_signin"]');
        this.emailInput = page.locator('input[type="email"]');
        this.passwordInput = page.locator('input[type="password"]');
        this.username = page.locator('#nav-link-accountList-nav-line-1');
        this.cartLink = page.locator('#nav-cart')
    }

    async navigateToSignInPage(){
        await this.signInLink.click();
    }

    async enterEmail(email: string){
        await this.emailInput.fill(email);
    }

    async clickContinueButton(){
        await this.page.click('#continue')
    }

    async enterPassword(password: string){
        await this.passwordInput.fill(password)
    }

    async clickSignInButton(){
        await this.page.click('#signInSubmit')
    }
    
    async checkSuccsesAuthorization(){
        await expect(this.username).not.toContainText('Hello, sign in');
    }

    async signIn(email: string, password: string){
        await this.navigateToSignInPage()
        await this.enterEmail(email)
        await this.clickContinueButton()
        await this.enterPassword(password)
        await this.clickSignInButton()
        await this.checkSuccsesAuthorization();
    }

    async clickOnCartPage(){
        await this.cartLink.click();
    }
}