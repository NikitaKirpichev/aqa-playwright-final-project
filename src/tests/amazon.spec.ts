import { test } from "@playwright/test";
import { HomePage } from "../pages/amazon/home.page";
import { SearchPage } from "../pages/amazon/search.page";
import { ProductPage } from "../pages/amazon/product.page";
import { EMAIL, PASSWORD } from "../constants/amazon-credentials.const"

test("Successful authorization", async({page, baseURL}) => {

    const login = new HomePage(page);

    await page.goto("https://www.amazon.com/");

    await login.signIn(EMAIL, PASSWORD);

})

test.describe("Search, add to cart product", () => {

    test.beforeEach(async ({ page }) => {

        const login = new HomePage(page);
        
        await page.goto("https://www.amazon.com/");
    
        await login.signIn(EMAIL, PASSWORD);
    });

    test("Search product", async({page, baseURL}) => {

        const search = new SearchPage(page);

        await page.goto("https://www.amazon.com/");
        
        await search.searchProduct('Lenovo Flex 5i - 14.0');

    })

    test("Adding the product into the cart from product's page", async({page, baseURL}) => {
        
        const productPage = new ProductPage(page);

        const search = new SearchPage(page);

        await page.goto("https://www.amazon.com/");
        
        await search.searchProduct('Lenovo Flex 5i - 14.0');

        await productPage.addToCart();

        await productPage.checkSuccsesAddingToCart();
    })

    test("Added product is displayed in the cart", async({page, baseURL}) => {
        
        const cart = new HomePage(page);    
        
        await page.goto("https://www.amazon.com/");

        await cart.clickOnCartPage();
    })

});



