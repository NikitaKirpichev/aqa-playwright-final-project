import { test } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { SearchPage } from "../pages/search.page";
import { ProductPage } from "../pages/product.page";

test("Successful authorization", async({page, baseURL}) => {

    const login = new HomePage(page);

    await page.goto("https://www.amazon.com/");

    await login.signIn('nalkire17@gmail.com', '(&6h:qhmB9nuWcr');

})

test.describe("Search, add to cart product", () => {

    test.beforeEach(async ({ page }) => {

        const login = new HomePage(page);
        
        await page.goto("https://www.amazon.com/");
    
        await login.signIn('nalkire17@gmail.com', '(&6h:qhmB9nuWcr');
    });

    test("Search product", async({page, baseURL}) => {

        const search = new SearchPage(page);

        await page.goto("https://www.amazon.com/");
        
        await search.searchProduct('lenovo');

    })

    test("Adding the product into the cart from product's page", async({page, baseURL}) => {
        
        const productPage = new ProductPage(page);

        const search = new SearchPage(page);

        await page.goto("https://www.amazon.com/");
        
        await search.searchProduct('lenovo');

        await productPage.addToCart();

        await productPage.checkSuccsesAddingToCart();
    })

    test("Added product is displayed in the cart", async({page, baseURL}) => {
        
        const cart = new HomePage(page);
        
        await page.goto("https://www.amazon.com/");

        await cart.clickOnCartPage();
    })

});



