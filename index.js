const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const items= [
        {
            name: 'Arjun',
            description: 'This is a dummy card.',
        },
        {
            name: 'Nimmi',
            description: 'This is another dummy card.',
        },
        {
            name: 'Sagar',
            description: 'This is a sample description for Sagar.'
        },
        {
            name: 'Fousiya',
            description: 'This is a placeholder card for Fousiya.',
        },
        {
            name: 'Ajil',
            description: 'This is a description for Ajil\'s card.',        },
        {
            name: 'Rojin',
            description: 'This is a card for Rojin with dummy text.',
        },
        {
            name: 'Fareeda',
            description: 'Description text for Fareeda.',
        },
        {
            name: 'Fathima',
            description: 'A sample card for Fathima.',
        },
        {
            name: 'Cincy',
            description: 'Dummy card for Cincy.',
        },
        {
            name: 'Zuhrabi',
            description: 'This is Zuhrabi\'s dummy card description.',
        }
    ];
     res.render('index',{ items });
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})