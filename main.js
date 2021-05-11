/*
Snack 1:
Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
- nome e
- peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/
/*
const biciCorsa = [
    
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
 

const lightest = biciCorsa.reduce(function(lightest, bici){               
    return bici.peso<lightest.peso ? bici : lightest;
},biciCorsa[0]);

console.log(lightest);


const {nome, peso} = biciCorsa;
// console.log(lightest.nome, lightest.peso);


// console.log(`la bici ${lightest.nome} pesa ${lightest.peso} kg, quindi è la bici più leggera sul mercato`);
document.getElementById("print").innerHTML = `la bici ${lightest.nome} pesa ${lightest.peso} kg, quindi è la bici più leggera sul mercato`;

*/

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

let soccerTeam = [
    
    {
        teamName: 'Malaga C.F.' ,
        points: 0,
        fails: 0,
    },

    {
        teamName: 'Real Madrid C.F.' ,
        points: 0,
        fails: 0,
    },

    {
        teamName: 'Barcelona C.F.' ,
        points: 0,
        fails: 0,
    },

    {
        teamName: 'Inter di Milano' ,
        points: 0,
        fails: 0,
    },

    {
        teamName: 'Arsenal' ,
        points: 0,
        fails: 0,
    },
]
    console.log(soccerTeam);




// get random number and push it inside of the points property and fails property
for(let i=0; i< soccerTeam.length;i++){
    
    soccerTeam[i].points = Math.floor(Math.random() * 21);
    console.log(soccerTeam[i].points);
    soccerTeam[i].fails = Math.floor(Math.random() * 21);
    console.log(soccerTeam[i].fails);

}
   
console.log(soccerTeam);


// new array created to insert team Name and fails
let soccerTeam2 = []

for(let i=0; i< soccerTeam.length;i++){

    soccerTeam2.push(soccerTeam[i].teamName);
    soccerTeam2.push(soccerTeam[i].fails);
    console.log(soccerTeam2);
}
   