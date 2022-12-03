# AQA-playwright-final-project
>Final project for AQA internship

## Technologies Used
- [Playwright](https://playwright.dev/)
- [Allure](https://docs.qameta.io/allure/)
- [Docker](https://www.docker.com/)
- [Jenkins](https://www.jenkins.io/)

## Features
List the ready features here:
- [Amazon](https://www.amazon.com) test
- [Onliner](https://www.onliner.by) test
- [Relax](https://www.relax.by) test
- [Vk](https://www.vk.com) test
- [Google-translate](https://translate.google.com) test

## Setup
To run this project, install it locally using npm:
```
$ npm install
```
To run this project:
```
$ npx playwright test --project=chromium --workers=1
```
Open allure reports:  
```
$ npx allure generate
$ npx allure open allure-report
```

To run Amazon tests, you need to create a file amazon-credentials.const.ts in src/constants, which looks like:
```
export const EMAIL = 'example@gmail.com' //replace by "exapmle@gmail.com" yours email
export const PASSWORD = 'example' //replace "exapmle" by yours password 
```

To run VK tests, you need to create a file vk-token.const.ts in src/constants, which looks like:
```
export const ACCESS_TOKEN = 'example' //replace "exapmle" by yours VK token, that has access to the wall
```
## Screenshots

Playwright report (running tests locally):
![image](https://sun9-19.userapi.com/impg/jEVdhqbw__4Sh3twDF3Tt-EVoM6dvOvTewnhgQ/drxITmIrMmI.jpg?size=1670x862&quality=96&sign=e17788afdd86a521ece00e2a8c5b1b1e&type=album)

Allure report in Docker:
![image](https://sun9-23.userapi.com/impg/nu2H00yOEwdBVPLTI0iNL1HSPEm_LfaAcGDhOg/vgS67uR7PrI.jpg?size=1467x861&quality=96&sign=aee9b9172249e05f51079975db95f3b7&type=album)



## Contact
Created by [Nikita Kirpichev](mailto:nalkire17@gmail.com) - feel free to contact me!
