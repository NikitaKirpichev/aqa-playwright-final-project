import { Page } from '@playwright/test';

export default class GoogleTranslatePage{
    constructor(public page: Page){

    }

    async enterSourseText(sourseText: string){
        await this.page.locator(".er8xn")
                       .type(sourseText);
    }

    async chooseSourceTextLanguage(sourceTextLaguage: string){
        await this.page.click(".VfPpkd-Bz112c-RLmnJb");
        await this.page.locator(".yFQBKb")
                        .type(sourceTextLaguage)
                        .keyboard.press("Enter");
                       
    }
}