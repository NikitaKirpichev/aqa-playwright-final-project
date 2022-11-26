import { test } from "@playwright/test";
import { HomePage } from "../pages/onliner/home.page";
import { PRODUCT_NAME } from "../constants/onliner-product-name.const";
import { ProductPage } from "../pages/onliner/product.page";
import { CartPage } from "../pages/onliner/cart.page";

test.describe("Search, add and delete from cart product", () =>{
    test("Search products", async({ page }) => {

        const search = new HomePage(page);

        await page.goto("https://www.onliner.by/");

        await search.searchProduct(PRODUCT_NAME);
    })

    test("Adding the product into the cart from product's page", async({ page }) => {

        const product = new ProductPage(page);

        const search = new HomePage(page);

        await page.goto("https://www.onliner.by/");

        await search.searchProduct(PRODUCT_NAME);

        await product.addToCart();
        
    })

    test("Added product is displayed in the cart", async({ page }) => {

        const product = new ProductPage(page);

        const search = new HomePage(page);

        const cart = new CartPage(page);

        await page.goto("https://www.onliner.by/");

        await search.searchProduct(PRODUCT_NAME);

        await product.addToCart();

        await product.naviagateToCartPage();

        await cart.checkProductInCart();
    })

    test("Removing a product from the cart", async({ page }) => {

        const product = new ProductPage(page);

        const search = new HomePage(page);

        const cart = new CartPage(page);

        await page.goto("https://www.onliner.by/");

        await search.searchProduct(PRODUCT_NAME);

        await product.addToCart();

        await product.naviagateToCartPage();

        await cart.deleteProduct();
    })
    
})