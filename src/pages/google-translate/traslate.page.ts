import { expect, Locator, Page } from '@playwright/test';

export default class HomePage{
    readonly page: Page;
    readonly buttonSourceTextMenu: Locator;
    readonly sourceLanguageTextArea: Locator;
    readonly buttonResultTextMenu: Locator;
    readonly resultLanguageTextArea: Locator;
    readonly sourceTextInput: Locator;
    readonly resultTextArea: Locator;

    constructor(page: Page){
        this.page = page;
        this.buttonSourceTextMenu = page.locator('xpath = //*[@id="yDmH0d"]/c-wiz/div/div[2]/c-wiz/div[2]/c-wiz/div[1]/div[1]/c-wiz/div[1]/c-wiz/div[2]/button');
        this.sourceLanguageTextArea = page.locator('xpath = //*[@id="yDmH0d"]/c-wiz/div/div[2]/c-wiz/div[2]/c-wiz/div[1]/div[1]/c-wiz/div[2]/c-wiz/div[1]/div/div[3]/div/div[3]/div[29]');
        this.buttonResultTextMenu = page.locator('xpath = //*[@id="yDmH0d"]/c-wiz/div/div[2]/c-wiz/div[2]/c-wiz/div[1]/div[1]/c-wiz/div[1]/c-wiz/div[5]/button');
        this.resultLanguageTextArea = page.locator('xpath = //*[@id="yDmH0d"]/c-wiz/div/div[2]/c-wiz/div[2]/c-wiz/div[1]/div[1]/c-wiz/div[2]/c-wiz/div[2]/div/div[3]/div/div[2]/div[98]');
        this.sourceTextInput = page.locator('xpath = //*[@id="yDmH0d"]/c-wiz/div/div[2]/c-wiz/div[2]/c-wiz/div[1]/div[2]/div[3]/c-wiz[1]/span/span/div/textarea');
        this.resultTextArea = page.locator('xpath = //*[@id="yDmH0d"]/c-wiz/div/div[2]/c-wiz/div[2]/c-wiz/div[1]/div[2]/div[3]/c-wiz[2]/div/div[8]/div/div[1]');
    }

    async clickButtonSourceTextLanguage(){
        await this.buttonSourceTextMenu.click();                       
    }

    async chooseSourceTextLanguage(){
        await this.sourceLanguageTextArea.click({delay: 2000});
    }



    async clickButtonResultTextLanguage(){
        await this.buttonResultTextMenu.click();                       
    }

    async chooseResultTextLanguage(){
        await this.resultLanguageTextArea.click({delay: 2000});
    }


    async enterSourseText(sourseText: string){
        await this.sourceTextInput.fill(sourseText);
    }

    async validateTraslate(){
        await expect(this.resultTextArea).toContainText('Тест');
    }

    async hideHintMenu(){
        await this.resultTextArea.click();
    }

    async translateText(sourseText: string){
        await this.clickButtonSourceTextLanguage();
        await this.chooseSourceTextLanguage();
        await this.clickButtonResultTextLanguage();
        await this.chooseResultTextLanguage();
        await this.enterSourseText(sourseText);
        await this.validateTraslate();
        await this.hideHintMenu();
    }
    
}