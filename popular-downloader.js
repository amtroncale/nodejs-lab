const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

rp('https://reddit.com/r/popular.json')
    .then(raw => {
        const info = JSON.parse(raw);
        info.data.children.forEach(pic => {
            let id = pic.data.id;
            let ext = path.extname(pic.data.url);
            let fileName = id + ext;

            if (ext === '.jpg' || ext === '.png' || ext === '.gif') {
                rp(pic.data.url, { encoding: 'base64' })
                    .then(media => {
                        fs.writeFile(path.join(__dirname, `./downloads/${fileName}`), media, { encoding: 'base64' }, (err) => {
                            if (err) {
                                console.log('Error!')
                                console.log(err);
                            }
                            console.log('Picture downloaded!');
                        })
                    })
            }
        })
    });