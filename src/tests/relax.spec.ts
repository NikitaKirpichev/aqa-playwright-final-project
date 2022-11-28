import { test } from "@playwright/test";
import { LunaRestoPage } from "../pages/relax/search.page";
import { FiltersPage } from "../pages/relax/fiters.page";
import { PostersPage } from "../pages/relax/advertisement.page";

test.describe("Relax.by", () =>{
    test("Search validation" , async({ page }) => {
        const luna = new LunaRestoPage(page);

        await page.goto("https://www.relax.by/");

        await luna.search();
    })

    test("Filters Validation" , async({ page }) => {
        const filters = new FiltersPage(page);

        await page.goto("https://www.relax.by/");

        await filters.validation();
    })

    test("Poster validation" , async({ page }) => {
        const movie = new PostersPage(page);

        await page.goto("https://www.relax.by/");

        await movie.validation();
    })
})