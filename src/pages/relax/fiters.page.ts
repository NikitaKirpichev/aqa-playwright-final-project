import { expect, Locator, Page } from '@playwright/test';

export class FiltersPage{
    readonly page: Page;
    readonly categoriesList: Locator;
    readonly categoriesMenu: Locator;
    readonly openFiltersButton: Locator;
    readonly filterContent: Locator;
    readonly regionArea: Locator;
    readonly regionAreaRatio: Locator;
    readonly takeawayFoodToggle: Locator;
    readonly kitchenMenuExpandButton: Locator;
    readonly kitchenMenuItem: Locator;
    readonly takeawayMenuToggle: Locator;

    static readonly ACTIVE_COLOR = 'rgb(0, 174, 239)';

    constructor(page: Page){
        this.page = page;
        this.categoriesList = page.locator('.CategoriesMainMenu__item', { hasText: 'Еда' });
        this.categoriesMenu = page.locator('div:nth-child(2) > div.List.CategoriesSubMenu__list.List--small > div:nth-child(1) > a');
        this.openFiltersButton = page.locator('.MenuItem--button');
        this.filterContent = page.locator('div.FilterSidebar__content');
        this.regionArea = page.locator('div.FilterSidebar__content > div:nth-child(2)');
        this.regionAreaRatio = page.locator('div.Modal__body > div > div:nth-child(2)');
        this.takeawayFoodToggle = page.locator('div:nth-child(3) > label > span.ToggleSwitch > span.ToggleSwitch__slider');
        this.kitchenMenuExpandButton = page.locator('div:nth-child(8) > div.CompositeButtons__wrapper > div.CompositeButtons__toggle');
        this.kitchenMenuItem = page.locator('div.FilterSidebar__item > div.CompositeButtons__wrapper.Wrapper > label:nth-child(9) > span', { hasText: 'Белорусская' });
        this.takeawayMenuToggle = page.locator('div:nth-child(27) > div.CompositeButtons__wrapper > label:nth-child(1) > span');
    }

    async clickEatCategory(){
        await this.categoriesList.click();
    }

    async clickRestaurantCategory(){
        await this.categoriesMenu.click();
    }

    async clickFilterButton(){
        await this.openFiltersButton.click();
    }

    async filterChooseRegion(){
        await this.regionArea.click();
        await this.regionAreaRatio.click();
    }

    async filterTakeawayFood(){
        await this.takeawayFoodToggle.click();
    }

    async fiterKitchen(){
        await this.kitchenMenuExpandButton.click();
        await this.kitchenMenuItem.first().click();
    }

    async filterTakeawayMenu(){
        await this.takeawayMenuToggle.click();
    }

    async filterValidation(){
        //region
        await expect(this.filterContent).toContainText('Заводской');

        //takeAwayFood
        await expect(this.takeawayFoodToggle).toHaveCSS('background-color',FiltersPage.ACTIVE_COLOR)

        //filterKitchen
        await expect(this.kitchenMenuItem).toHaveCSS('background-color',FiltersPage.ACTIVE_COLOR);

        //filterTakeawayMenu
        await expect(this.takeawayMenuToggle).toHaveCSS('background-color',FiltersPage.ACTIVE_COLOR)
    }

    async validation(){
        await this.clickEatCategory();
        await this.clickRestaurantCategory();
        await this.clickFilterButton();
        await this.filterChooseRegion();
        await this.filterTakeawayFood();
        await this.fiterKitchen();
        await this.filterTakeawayMenu();
        await this.filterValidation();
    }
}