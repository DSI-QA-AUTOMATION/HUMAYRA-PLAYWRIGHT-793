const {test, expect}= require ('@playwright/test')

test.skip('Frames',async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    //total frames
    const allframes = await page.frames()
    console.log("Number of frames", allframes.length)

    // app1, name/ url: frame object
    const fr1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // const var= await page.frame('name');
    await fr1.fill("[name='mytext1']", 'Hello');
    await page.waitForTimeout(3000)

    // app2, using fraame locator
    const inpbox = await page.frameLocator("frame[src='frame_2.html']").locator("[name='mytext2']")
    inpbox.fill("second box")
    await page.waitForTimeout(3000)
})

test.skip('Inner frames', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const f3= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await f3.fill("[name='mytext3']", 'Frame 3')
    const childFrs = await f3.childFrames()
    await childFrs[0].locator('//*[@id="i6"]/div[3]/div').check()
    await page.waitForTimeout(3000)
})

test('Copy from frame', async({page})=>{
    await page.goto('https://demoqa.com/frames')
    const fr = await page.frame({url:'https://demoqa.com/sample'})
    const text = await fr.locator('#sampleHeading').innerText();
    console.log('Copied text:', text);
    expect(text).toBe('This is a sample page');

    const fr2 = await page.frame({name:'frame2'})
    const text2 = await fr2.locator('#sampleHeading').innerText();
    console.log('Copied second frame text:', text);
    expect(text).toBe('This is a sample page');  

    await page.waitForTimeout(3000)

})