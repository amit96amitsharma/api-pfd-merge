const pdftk = require('node-pdftk');
const fs = require('fs')

const init = () => {
    pdftk.input({
        A: './pay1.pdf',
        B: fs.readFileSync('./pay2.pdf'),
    })
        .cat('A B')
        .output('./newPay.pdf')
        .then(buffer => {
            console.log('working fine')
            // Do stuff with the output buffer
        })
        .catch(err => {
            console.log(err)
            console.log('not working fine')
            // handle errors
        });
}

init();
