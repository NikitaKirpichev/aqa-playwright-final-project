import { expect, Locator, Page } from '@playwright/test';

export class PostersPage{
    readonly page: Page;
    readonly categoriesList: Locator;
    readonly advertisementTitles: Locator;
    readonly movieTitle: Locator;
    readonly moviesList: Locator;
    readonly feedbackArea: Locator;

    constructor(page: Page){
        this.page = page;
        this.categoriesList = page.locator('.CategoriesMainMenu__item', { hasText: 'Афиша' });
        this.advertisementTitles = page.locator('#append-shcedule > section:nth-child(1)');
        this.movieTitle = page.locator('a.b-afisha-layout-theater_movie-tag');
        this.moviesList = page.locator('#append-shcedule > section:nth-child(1) > div > ul > div > div > li');
        this.feedbackArea = page.locator('div.send-feedback');
    }

    async clickPosterCategory(){
        await this.categoriesList.click();
    }

    async clickMoviePoster(){
        await expect(this.advertisementTitles).toContainText('Кино');
        await this.moviesList.first().click();
        await expect(this.movieTitle).toContainText('Кино');
    }

    async feedbackSectionCheck(){
        await expect(this.feedbackArea).toBeVisible();
    }

    async validation(){
        await this.clickPosterCategory();
        await this.clickMoviePoster();
        await this.feedbackSectionCheck();
    }
}