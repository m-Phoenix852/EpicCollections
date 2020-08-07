const epiccol = require('./index');
const fs = require('fs');

let col = new epiccol.Collection();

col.set('something', {
    "why": "1"
});
col.set('something2', {
    "why": "2"
});
col.set('something3', {
    "why": "3"
});

col.forEach(1)