import { test, expect } from "@playwright/test";
import HomePage from "../pages/google-translate/translate.page";

test.describe("Google translate", () => {
    test("UI Validation", async({page}) =>{

        const homePage = new HomePage(page);

        await page.goto('https://translate.google.com/');

        //await expect(page).toHaveScreenshot('homePage.png');

        await homePage.translateText("Test");

        await expect(await page.screenshot()).toMatchSnapshot('homePage.png', { threshold: 1 });
        
    })
})