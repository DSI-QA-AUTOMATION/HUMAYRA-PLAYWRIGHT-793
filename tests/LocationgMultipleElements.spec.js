const {test,expect} =require('@playwright/test');

test('Home Page',async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')

 
    // matches all links with 'a'
    // const links= await page.$$('a')
    // for(const link of links)
    // {
    //     const linktext= await link.textContent();
    //     console.log(linktext);
    // }
    await page.waitForSelector('#tbodyid h4 a');
    const products= await page.$$("//div[@id='tbodyid']//div//h4/a")
    console.log("products list: ",products)
    for(const product of products){
        const productName= await product.textContent();
        console.log(productName)
    }

    page.close()
})