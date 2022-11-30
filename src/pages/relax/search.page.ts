import { expect, Locator, Page } from '@playwright/test';
import { ADDRESS, PHONE, WORKING_HOURS } from '../../constants/relax-baseline.const';

export class LunaRestoPage{

    readonly page: Page;
    readonly adressArea: Locator;
    readonly phoneArea: Locator;
    readonly inputArea: Locator;
    readonly lunaRestoLink: Locator;
    readonly workingHoursButton: Locator;

    readonly mondayWorkingHoursArea: Locator;
    readonly tuesdayWorkingHoursArea: Locator;
    readonly wednesdayWorkingHoursArea: Locator;
    readonly thursdayWorkingHoursArea: Locator;
    readonly fridayWorkingHoursArea: Locator;
    readonly saturdayWorkingHoursArea: Locator;
    readonly sundayWorkingHoursArea: Locator;

    constructor(page: Page){
        this.page = page;
        this.inputArea = page.locator('.Search__input');
        this.lunaRestoLink = page.locator('ul > div:nth-child(1) > div.SearchResults__groupContent > div:nth-child(1) > a:nth-child(2)');
        this.phoneArea = page.locator('.Button__phone');
        this.adressArea = page.locator('.PersonalContacts__address');
        this.workingHoursButton = page.locator('.PersonalContacts__worktime');

        this.mondayWorkingHoursArea = page.locator('div:nth-child(1) > div.ContactsPopupOpening__cell.ContactsPopupOpening__main');
        this.tuesdayWorkingHoursArea = page.locator('div:nth-child(2) > div.ContactsPopupOpening__cell.ContactsPopupOpening__main');
        this.wednesdayWorkingHoursArea = page.locator('div:nth-child(3) > div.ContactsPopupOpening__cell.ContactsPopupOpening__main');
        this.thursdayWorkingHoursArea = page.locator('div:nth-child(4) > div.ContactsPopupOpening__cell.ContactsPopupOpening__main');
        this.fridayWorkingHoursArea = page.locator('div:nth-child(5) > div.ContactsPopupOpening__cell.ContactsPopupOpening__main');
        this.saturdayWorkingHoursArea = page.locator('div:nth-child(6) > div.ContactsPopupOpening__cell.ContactsPopupOpening__main');
        this.sundayWorkingHoursArea = page.locator('div:nth-child(7) > div.ContactsPopupOpening__cell.ContactsPopupOpening__main');
    }

    async searchPlace(){
        await this.inputArea.fill('Luna');
    }
    
    async choosePlace(){
        await this.lunaRestoLink.click();
    }

    async checkPhone(){
        await expect(this.phoneArea).toHaveText(PHONE);
    }

    async checkAddress(){
        await expect(this.adressArea).toHaveText(ADDRESS);
    }

    async clickWorkingHoursButton(){
        await this.workingHoursButton.click();
        await expect(this.page.locator('css=[class="Popup ContactsPopup ContactsPopup--hasFooter ContactsPopup--openingIsVisible"]')).toBeVisible();
    }

    async checkWorkingHours(){
        await expect.soft(this.mondayWorkingHoursArea).toHaveText(WORKING_HOURS.monday);
        await expect.soft(this.tuesdayWorkingHoursArea).toHaveText(WORKING_HOURS.tuesday);
        await expect.soft(this.wednesdayWorkingHoursArea).toHaveText(WORKING_HOURS.wednesday);
        await expect.soft(this.thursdayWorkingHoursArea).toHaveText(WORKING_HOURS.thursday);
        await expect.soft(this.fridayWorkingHoursArea).toHaveText(WORKING_HOURS.friday);
        await expect.soft(this.saturdayWorkingHoursArea).toHaveText(WORKING_HOURS.saturday);
        await expect.soft(this.sundayWorkingHoursArea).toHaveText(WORKING_HOURS.sunday);
    }

    async search(){
        await this.searchPlace();
        await this.choosePlace();
        await this.checkPhone();
        await this.checkAddress();
        await this.clickWorkingHoursButton();
        await this.checkWorkingHours();
    }
}