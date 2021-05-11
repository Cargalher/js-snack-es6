/*
Snack 1:
Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
- nome e
- peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

let biciCorsa = [
    
    {
       nome: "Cimino",
       peso: 9.0,
    },

    {
        nome: "Bianchi",
        peso: 5.4,
    },

    {
        nome: "Olmo",
        peso: 7.0,
    },

    {
        nome: "Orbea",
        peso: 4.5,
    },

    {
        nome: "Cannondale",
        peso: 8.0,
    },

    {
        nome: "Giant",
        peso: 5.7,
    },

    {
        nome: "Trek",
        peso: 4.6,
    },

    {
        nome: "Scott",
        peso: 6.2,
    },

    {
        nome: "Canyon",
        peso: 8.4,
    },

    {
        nome: "BMC",
        peso: 7.7,
    },

]
 

let lightest = biciCorsa.reduce(function(lightest, bici){
    return bici.peso<lightest.peso ? bici : lightest;
},biciCorsa[0]);
console.log(lightest);
/*
Snack2:
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/