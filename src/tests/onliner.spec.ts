import { test } from "@playwright/test";
import { HomePage } from "../pages/onliner/home.page";

const productName = 'Смартфон Samsung Galaxy A52 SM-A525F/DS 4GB/128GB (черный)';

test.describe("Search, add and delete from cart product", () =>{
    test("Search products", async({page}) => {
        const search = new HomePage(page);

        await page.goto("https://www.onliner.by/");

        await search.enterProductName(productName);
    })
})