//Home Assignment <2.2>
//Red Bus and Flipkart in Edge and Firefox Browser Instances (Week2.Day2)
import { test, chromium, firefox ,expect} from "@playwright/test"
test("Red Bus and Flipkart in Edge and Firefox Browser Instances", async () => {

//Browser Launching    
const edgeBrowser=await chromium.launch({channel:"msedge"})
const firefoxBrowser= await firefox.launch()

//Creating Browser Contexts
const edgeContext= await edgeBrowser.newContext();
const edgePage= await edgeContext.newPage();

const firefoxContext= await firefoxBrowser.newContext();
const firefoxPage= await firefoxContext.newPage();

await edgePage.goto("https://www.redbus.in");
const redBusUrl=edgePage.url();
const redBusTitle=await edgePage.title();
await edgePage.waitForTimeout(3000)
console.log(redBusTitle);

await firefoxPage.goto("https://www.flipkart.com")
const flipkartUrl= firefoxPage.url();
const flipkartTitle=await firefoxPage.title();
console.log(flipkartTitle);

//Verification
//expect(redBusUrl).toBe("https://www.redbus.in");



   
})