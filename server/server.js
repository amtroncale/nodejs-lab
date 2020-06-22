const path = require('path');
const fs = require('fs');

const chirpPath = path.join(__dirname, '../chirps.json');

const chirps = [
    {
        id: 1,
        name: 'Adam',
        chirp: 'Hi'
    },
    {
        id: 2,
        name: 'Jessica',
        chirp: 'how'
    },
    {
        id: 3,
        name: 'Maverick',
        chirp: 'are'
    },
    {
        id: 4,
        name: 'Luke',
        chirp: 'you'
    },
    {
        id: 5,
        name: 'Frank',
        chirp: 'doing?'
    },
];

fs.writeFile(chirpPath, JSON.stringify(chirps), (err) => {
    if (err) {
        console.log('Error!');
        console.log(err);
    }
    console.log('You have chirped!');
});

fs.readFile(chirpPath, (err, data) => {
    if (err) console.log(err);
    const test = JSON.parse(data);
        console.log(test);
});