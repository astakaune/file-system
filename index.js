const data = require('./lib/data.js');


// data.create('books', 'du-gaideliai', { text: 'Baltus zirnius kule' }, (err, msg) => {
// if (err) {
//         console.log(msg);
//     } else {
//             console.error(msg);
//         }
//         console.log(err, 'sekantys zingsniai po bandymo sukurti faila');
//         console.log(err, msg);
//         console.log('Sekantys zingsniai po bandymo sukurti faila..');
// });


const initialDataPetras = { name: 'Petras', age: 99 };
data.create('users', 'petras', initialDataPetras, (err, msg) => {
    console.log('create1:', err, msg);

    data.read('users', 'petras', (err, content) => {
        const fileData = JSON.parse(content);
        console.log('read1:', fileData);
        //     console.log(err);
        //     console.log(fileData.name); //dabar fileData yra objektas
        //     console.log(fileData.age);

        //UPDATE: prie Petro objekto prideti "megstama spalva: red"
        data.update('users', 'petras', { ...initialDataPetras, favoriteColor: 'red', favoriteCar: 'Tesla' }, (err, msg) => {
            console.log('update1:', err, msg);

            //dar karta perskaityti ta pati faila
            data.read('users', 'petras', (err, content) => {
                const fileData = JSON.parse(content);
                console.log('read2:', fileData);

                // data.delete('users', 'petras', (err, msg) => {
                //     console.log('delete1:', err, msg);
                // })
            })
        })
    })

});







