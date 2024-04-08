//import puppeter
const puppeteer = require('puppeteer')

async function getCourseData(selectPage = 1) {
    //launch browser
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    await page.goto((selectPage === 1)? 'https://sanet.st/video-courses/' : `https://sanet.st/video-courses/page-${selectPage}/`)

    //get list of title
    const data = await page.evaluate(() => {
        const listTitle = document.querySelectorAll('li.fffbg')
        const data = []
        listTitle.forEach(element => {
            const title = element.firstElementChild.firstElementChild.nextElementSibling.innerText
            const course = element.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.href
            const seller = element.firstElementChild.firstElementChild.lastElementChild.href
            data.push({
                title : title,
                course : course,
                seller : seller
            })
        });
        return data
    })
    
    await browser.close();
    return data
}

module.exports = getCourseData
