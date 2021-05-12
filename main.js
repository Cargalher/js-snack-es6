/*
Snack 1:
Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
- nome e
- peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/
/*S
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
 
*/
// const lightest = biciCorsa.reduce(function(lightest, bici){               
//     return bici.peso<lightest.peso ? bici : lightest;
// },biciCorsa[0]);

// console.log(lightest);


// const {nome, peso} = biciCorsa;
// // console.log(lightest.nome, lightest.peso);


// // console.log(`la bici ${lightest.nome} pesa ${lightest.peso} kg, quindi è la bici più leggera sul mercato`);
// document.getElementById("print").innerHTML = `la bici ${lightest.nome} pesa ${lightest.peso} kg, quindi è la bici più leggera sul mercato`;

// // fabio's way
// let lighthtest = biciCorsa [0];
//  for (let i = 0; i<biciCorsa.length;i++ ){
//      const bici =  biciCorsa [i]
//     //  bici con peso minore
//     if(bici.peso< lighthtest.peso){
//         lighthtest = bici
//     }
//  }

// console.log(lighthtest);

// const{nome,peso} = lighthtest;
// const markup = 

// // copy this part from fabio esample






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

// let soccerTeam = [
    
//     {
//         teamName: 'Malaga C.F.' ,
//         points: 0,
//         fails: 0,
//     },

//     {
//         teamName: 'Real Madrid C.F.' ,
//         points: 0,
//         fails: 0,
//     },

//     {
//         teamName: 'Barcelona C.F.' ,
//         points: 0,
//         fails: 0,
//     },

//     {
//         teamName: 'Inter di Milano' ,
//         points: 0,
//         fails: 0,
//     },

//     {
//         teamName: 'Arsenal' ,
//         points: 0,
//         fails: 0,
//     },
// ]
//     console.log(soccerTeam);

// // ES6

// // const [Malaga,Madrid,Barcelona,Inter,Arsenal] = soccerTeam;
// // console.log(Malaga);













// // get random number and push it inside of the points property and fails property
// for(let i=0; i< soccerTeam.length;i++){

//     soccerTeam[i].points = Math.floor(Math.random() * 21);
//     console.log(soccerTeam[i].points);
//     soccerTeam[i].fails = Math.floor(Math.random() * 21);
//     console.log(soccerTeam[i].fails);

// }
   
// console.log(soccerTeam);


// // new array created to insert team Name and fails
// let soccerTeam2 = []

// for(let i=0; i< soccerTeam.length;i++){

//     soccerTeam2.push({
//             teamName: soccerTeam[i].teamName,
//             fail: soccerTeam[i].fails,
//         })
        
    
// }
// console.log(soccerTeam2);
 
// // let [teamName, fails] = soccerTeam2;
// // console.log(teamName);
// // console.log(fails);


// let [{teamName,fails}] = soccerTeam2;
// console.log(teamName,fails);

// Snack 3:

/*Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.*/




    const movies = ['Cinema Paradiso', ' Gladiator', 'Titanic', 'Rocky', ' Psycho ', 'Vertigo', ' Pulp Fiction', 'Boyhood']
    const min = 1
    const max =5
    const newArray =[];
  

    movies.forEach((movie,i,movieList) => {

        // console.log(movie);
        if(i>=min && i <=max ){
            newArray.push(movie[i])
        }
       
     
       
    });
     console.log(newArray);
   

     