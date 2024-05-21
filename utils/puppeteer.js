const puppeteer = require('puppeteer');

async function generateCV()
{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(        
        `
        <html>
        <body>
          <h1>irakli</h1>
          <p>somerandompeople</p>
          <!-- Add more HTML here for the rest of the CV -->
        </body>
      </html>
        `
    );

    const pdf = await page.pdf({format: 'A4'});

    await browser.close();


    return pdf;
}


module.exports = {generateCV};