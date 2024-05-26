import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';

require('dotenv').config();

let homePage: HomePage;

const homeUrl = process.env.HOME_URL!;

//Before each test
test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goToHomePageUrl(homeUrl);
});


//test cases
test('has title', async ({ page }) => {
    // Arrange
    // Act
    // Assert
  await expect(page).toHaveTitle("Google"); //assert
});
