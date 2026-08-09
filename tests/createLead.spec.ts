import {test, expect} from '@playwright/test';

test("Dropdown and assertion Assignment", async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator('#username').fill("Demosalesmanager")
await page.locator('#password').fill("crmsfa")
await page.getByRole('button', { name: 'Login' }).click()
await page.locator('#button').click()

//create lead
await page.getByRole('link', { name: 'Leads' }).click()
await page.getByRole('link', { name: 'Create Lead' }).click()
await page.locator('#createLeadForm_companyName').fill("LTM")
await page.locator('#createLeadForm_firstName').fill("Shalini")
await page.locator('#createLeadForm_lastName').fill("Biswal")
await page.locator('#createLeadForm_personalTitle').fill("Ms")
await page.locator('#createLeadForm_generalProfTitle').fill("Engineer")
await page.locator('#createLeadForm_annualRevenue').fill("1000000")
await page.locator('#createLeadForm_departmentName').fill('quality engineer')
await page.locator('#createLeadForm_primaryPhoneNumber').fill("999644")
await page.locator('input[name="submitButton"]').click()

await expect(page)

})