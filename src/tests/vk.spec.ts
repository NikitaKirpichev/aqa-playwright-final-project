import { test } from "@playwright/test";
import { expect, Locator, Page } from '@playwright/test';
import { ACCESS_TOKEN } from "../constants/vk-token.const";

test.describe.configure({ mode: 'serial' });

test.describe('Vk api test', () =>{

    let postID;
    const USER_ID = 142336732;
    const POST_MESSAGE = 'Api test';

    test.afterEach(async({page}) =>{
        await page.goto('https://vk.com/toolboy')
    })

    test("create a wall post", async ({ request }) => {

        const response = await request.get(`https://api.vk.com/method/wall.post/`, {
            params : {
                access_token : ACCESS_TOKEN,
                friends_only : '0',
                message : 'Api test',
                v : '5.131'
            }
        });

        postID = (await response.json())['response']['post_id'];
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

    });

    test("like this post", async ({ request }) => {
        const response = await request.get(`https://api.vk.com/method/likes.add/`, {
            params : {
                access_token : ACCESS_TOKEN,
                type : 'post',
                item_id : postID,
                v : '5.131'
            }
        });
  
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
    });

    test("comment created record", async ({ request }) => {
        const response = await request.get(`https://api.vk.com/method/wall.createComment/`, {
            params : {
                access_token : ACCESS_TOKEN,
                message : 'Playwright',
                post_id  : postID,
                v : '5.131'
            }
        });
  
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
    });

    test("validate all information in the created record", async ({ request }) => {
        const response = await request.get(`https://api.vk.com/method/wall.getById/`, {
            params : {
                access_token : ACCESS_TOKEN,
                posts : `${USER_ID}_${postID}`,
                v : '5.131'
            }
        });
  
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        expect((await response.json())['response'][0]['text']).toContain(POST_MESSAGE);
        expect((await response.json())['response'][0]['likes']['count']).toBeTruthy();
        expect((await response.json())['response'][0]['comments']['count']).toBeTruthy();

    });

})