// let items = ['Phone', 'Pencil', 'Box', 'Table']


// let user = {
//     id:1,
//     name: 'Jonas',
//     email: 'Jonukas123@gmail.com',
//     role:'Admin'

// }

// let students =[
//     {   id:1,
//         firstName: 'Tadas',
//         lastName: 'Tadauskas',
//         email: 'tadas.tadauskas@tud.kitm.lt',
//         group:'students',
//         marks:[
//             {
//                 subject:'Programing',
//                 mark:8
//             },
//             {
//                 subject:'History',
//                 mark:9
//             },
//             {
//                 subject:'Math',
//                 mark:6
//             }
//         ]
//     },
//     {   id:2,
//         firstName: 'Tidas',
//         lastName: 'Tidauskas',
//         email: 'tidas.tadauskas@tud.kitm.lt',
//         group:'students',
//         marks:[
//             {
//                 subject:'Programing',
//                 mark:9
//             },
//             {
//                 subject:'History',
//                 mark:6
//             },
//             {
//                 subject:'Math',
//                 mark:9
//             }
//         ]
//     },
//     {   id:3,
//         firstName: 'Ieva',
//         lastName: 'Ievute',
//         email: 'ieva.ievute@tud.kitm.lt',
//         group:'students',
//         marks:[
//             {
//                 subject:'Programing',
//                 mark:5
//             },
//             {
//                 subject:'History',
//                 mark:6
//             },
//             {
//                 subject:'Math',
//                 mark:9
//             }
//         ]
//     },
//     {   id:4,
//         firstName: 'Migle',
//         lastName: 'Miglute',
//         email: 'ieva.ievute@tud.kitm.lt',
//         group:'students',
//         marks:[
//             {
//                 subject:'Programing',
//                 mark:2
//             },
//             {
//                 subject:'History',
//                 mark:4
//             },
//             {
//                 subject:'Math',
//                 mark:6
//             }
//         ]
//     },
//     {   id:4,
//         firstName: 'Mita',
//         lastName: 'Mitute',
//         email: 'mita.mitute@tud.kitm.lt',
//         group:'students',
//         marks:[
//             {
//                 subject:'Programing',
//                 mark:2
//             },
//             {
//                 subject:'History',
//                 mark:4
//             },
//             {
//                 subject:'Math',
//                 mark:6
//             }
//         ]
//     }

// ]

// console.log('For ciklas:')

//for(let i=0; i<items.length; i++){
//    console.log(items[i])
//}

//for(let item in items){
//    console.log(items[item])
//}

//for of

//for(let item in user){
//  console.log(`${item}:${user[item]}`)
//}
//console.log(`studentai:`)
// for(let student of students){
//     console.log(`---------------`)
//     for(let studentData in student){
//         if(studentData=='group'){
//             console.log(`Group:${student[studentData]}`);
//         }else{
//             if(studentData =='marks'){
//                 console.log('Ivertinimai:')
//                 for(let marks of student[studentData]){
//                         console.log(`${marks.subject}:${marks.mark}`)
//                     }  
//             }else{
//                 console.log(student[studentData]);

//             }
        
//         }
        
//     } 
         
    
// }


//masyvu metodai

// let names = ['Jonas', 'Andrius', 'Ieva', 'Karolis'];


// names = names.join(' , '); // names tampa stringu

// names = names.split(' , ');// konvertuoja i konsole

// console.log(names); // isveda i konsole



// names.push('Giedrius');// prideda kaip paskutini elementa

// names.pop();// paskutinis elementas

// names.unshift('Kristina');// prideda kaip pirma elementa
// names.shift();//pasalina pirma elementa

// names.splice(2, 0, 'Tadas');

// console.log(names);// isvedimas



// let user = prompt('Ivesk vartotojo varda');

// console.log(user);

// let svecias = prompt('Kiek sveciu bus partyje:..')

// let sveciuSarasas = [];

// for(let i=0; i < svecias; i++){
//     i = prompt('Svecio vardas...');
//     console.log(i);
//     names = sveciuSarasas.split(' , ');
// }

//Funkcijos deklaravimas:
// function syHi(a){

//     return a*2;
// }

// //Funkcijos callinimas:

// console.log(syHi(2));

//anonimine funkcija

// const calc = function(...numbers){
//     return numbers.reduce((prev, current)=>prev*current);
    
// }

// console.log(calc(2,5,3,2,5))

//arrow funkcija

// const calce = (...numbers)=>{
//     return numbers.reduce((prev, current)=>prev*current);
    
// }

// console.log(calce(2,5,3,2,5))

// let students =[
//     {   id:1,
//         firstName: 'Tadas',
//         lastName: 'Tadauskas',
//         email: 'tadas.tadauskas@tud.kitm.lt',
//         group:'students',
//         marks:[
//             {
//                 subject:'Programing',
//                 mark:8
//             },
//             {
//                 subject:'History',
//                 mark:9
//             },
//             {
//                 subject:'Math',
//                 mark:6
//             }
//         ]
//     },
//     {   id:2,
//         firstName: 'Tidas',
//         lastName: 'Tidauskas',
//         email: 'tidas.tadauskas@tud.kitm.lt',
//         group:'students',
//         marks:[
//             {
//                 subject:'Programing',
//                 mark:9
//             },
//             {
//                 subject:'History',
//                 mark:6
//             },
//             {
//                 subject:'Math',
//                 mark:9
//             }
//         ]
//     },
//     {   id:3,
//         firstName: 'Ieva',
//         lastName: 'Ievute',
//         email: 'ieva.ievute@tud.kitm.lt',
//         group:'students',
//         marks:[
//             {
//                 subject:'Programing',
//                 mark:5
//             },
//             {
//                 subject:'History',
//                 mark:6
//             },
//             {
//                 subject:'Math',
//                 mark:9
//             }
//         ]
//     },
//     {   id:4,
//         firstName: 'Migle',
//         lastName: 'Miglute',
//         email: 'ieva.ievute@tud.kitm.lt',
//         group:'students',
//         marks:[
//             {
//                 subject:'Programing',
//                 mark:2
//             },
//             {
//                 subject:'History',
//                 mark:4
//             },
//             {
//                 subject:'Math',
//                 mark:6
//             }
//         ]
//     },
//     {   id:4,
//         firstName: 'Mita',
//         lastName: 'Mitute',
//         email: 'mita.mitute@tud.kitm.lt',
//         group:'students',
//         marks:[
//             {
//                 subject:'Programing',
//                 mark:2
//             },
//             {
//                 subject:'History',
//                 mark:4
//             },
//             {
//                 subject:'Math',
//                 mark:6
//             }
//         ]
//     }

// ]

// function student(a){
//     a = prompt('Koks studento vardas:..')
// for(let student of students){
//     for(let studentData in student){
//         if(firstName == a[0]){
//             console.log(`${a[studentData]}`);
//         }else{
//             if(lastName == a[1]){
//                 console.log(`${a[studentData]}`);
                     
//             }else{
//                 console.log(`Nera tokio studento....`);
//             }
        
//         }
        
//     } 
         
    
// }

    
//
// function student(){
// a = prompt('Koks studento vardas:..')
// for(let student of students){
//     if(student.firstName == a){
//         for(let studentData in student){
//             if(studentData=='group'){
//                 console.log(`Group:${student[studentData]}`);
//             }else{
//                 if(studentData =='marks'){
//                     console.log('Ivertinimai:')
//                     for(let marks of student[studentData]){
//                             console.log(`${marks.subject}:${marks.mark}`)
//                         }  
//                 }else{
//                     console.log(student[studentData]);
    
//                 }
            
//             }
            
//         } 
//     }
//     else{
//         console.log('Tokio studento nera.....')
//     }
 
         
    
// }

// }

// student()


// for(let item in a){
//     console.log(a.includes[item])
// }


// let books =
//     {     
//         grozine:[
//         {
//             ISBN:'GR1236K',
//             leidimoMetai: 1989,
//             Pavadinimas:'Pavadinimas: Miskais ateina ruduo',
//             puslapiuSkaicius:'Puslapius skaicius: 200'
//         },
//         {
//             ISBN:'GR1236L',
//             leidimoMetai: 1999,
//             Pavadinimas:'Pavadinimas: Miskas',
//             puslapiuSkaicius:'Puslapius skaicius: 199'
//         },
//         {
//             ISBN:'GR1236L',
//             leidimoMetai: 1999,
//             Pavadinimas:'Pavadinimas: Dievu miskas',
//             puslapiuSkaicius:'Puslapiu skaicius: 190'
//         },
//         {
//             ISBN:'GR1246L',
//             leidimoMetai: 2000,
//             Pavadinimas:'Pavadinimas: Kafka',
//             puslapiuSkaicius:'Paslapius skaicius: 180'
//         },
        
//     ],
      
//         negrozines:[
//             {
//                 ISBN:'GR1245S',
//                 leidimoMetai: 2011,
//                 Pavadinimas:'Pavadinimas: Ekonomikos pradziamokslis',
//                 puslapiuSkaicius:'Puslapius skaicius: 500'
//             },
//             {
//                 ISBN:'GR1265I',
//                 leidimoMetai: 2010,
//                 Pavadinimas:'Pavadinimas: Finansai ir pinigai',
//                 puslapiuSkaicius:'Puslapiu skaicius: 600'
//             },
//             {
//                 ISBN:'GR126KL',
//                 leidimoMetai: 2015,
//                 Pavadinimas:'Pavadinimas: Gyvenimas',
//                 puslapiuSkaicius:'Puslapiu skaicius: 700'
//             },
//             {
//                 ISBN:'GR1212L',
//                 leidimoMetai: 2000,
//                 Pavadinimas:'Menulis',
//                 puslapiuSkaicius:'Puslapiu skaicius: 300'
//             },
//         ],
        
//         saviugda:[
//         {
//             ISBN:'GR1213O',
//             leidimoMetai: 2015,
//             Pavadinimas:'Pavadinimas: Atrask save per 10min',
//             puslapiuSkaicius:'Puslapiu skaicius: 150'
//         },
//         {
//             ISBN:'GR1213J',
//             leidimoMetai: 2023,
//             Pavadinimas:'Pavadinimas: Kas TU?',
//             puslapiuSkaicius:'Puslapiu skaicius: 80'
//         },
//         {
//             ISBN:'GR1239P',
//             leidimoMetai: 2021,
//             Pavadinimas:'Pavadinimas: Laimes abecele',
//             puslapiuSkaicius:'Puslapiu skaicius: 300'
//         },
//         {
//             ISBN:'GR1261R',
//             leidimoMetai:  2021,
//             Pavadinimas:'Pavadinimas: Kur deti taska ant I?',
//             puslapiuSkaicius:'Puslapiu skaicius: 600'
//         }
        
    // ]
    // }




// function book(a){
// for(let item in a){
//     console.log(`${item}:${a[item].length}`)
//     for(let i in a[item]){
//         console.log(a[item][i].ISBN)
        
//         let value = a[item][i].leidimoMetai
//         if(a[item][i].leidimoMetai >= 2018){
//             value = value + (" (Nauja knyga)")
//         }
//         console.log(value)
//         console.log(a[item][i].Pavadinimas)
//         console.log(a[item][i].puslapiuSkaicius)
        
//     }
  
// }
// }

// book(books);
    


//if(studentData =='marks'){
    //                     console.log('Ivertinimai:')
    //                     for(let marks of student[studentData]){
    //                             console.log(`${marks.subject}:${marks.mark}`)
    //                         }  
    //                 }else{
    //                     console.log(student[studentData]);
        
    //                 }



// document.querySelector('article').style.backgroundColor='tomato';

// document.querySelector('p').textContent ="<strong>Labai gerai</strong>"

// for(let text of document.querySelectorAll('h4')){
//     text.textContent=""
// }

// const ul = document.createElement('ul');
// const li = document.createElement('li');
// li.textContent = 'Labai svarbus darbas';

// document.querySelector('section').appendChild(document.createElement('ul'));
// document.querySelector('ul').appendChild(li);

// const table = document.createElement('table');
// const tr = document.createElement('tr');
// const td = document.createElement('td');



// document.querySelector('section').appendChild(document.createElement('table'));
// document.querySelector('table').appendChild(document.createElement('tr'));
// document.querySelector('tr').appendChild(document.createElement('td'));

// let row = 3;
// let column = 10;

// let table = document.createElement('table'), tr, td;

// for(let i=0; i<row; i++){
//     tr = document.createElement("tr");
//     for(let j=0; j<column; j++){
//         td = document.createElement("td");
//         td.textContent = 
//         '0';
//         tr.appendChild(td) 
//     }
//     table.appendChild(tr)

// }

// document.querySelector('section').appendChild(table)

let books =
    {     
    Grozine:[
         {
        ISBN:'GR1236K',
        leidimoMetai: 1989,
         Pavadinimas:'Pavadinimas: Miskais ateina ruduo',
        puslapiuSkaicius:'Puslapius skaicius: 200'
         },
        {
             ISBN:'GR1236L',
             leidimoMetai: 1999,
            Pavadinimas:'Pavadinimas: Miskas',
            puslapiuSkaicius:'Puslapius skaicius: 199'
        },
        {
            ISBN:'GR1236L',
                leidimoMetai: 1999,
             Pavadinimas:'Pavadinimas: Dievu miskas',
            puslapiuSkaicius:'Puslapiu skaicius: 190'
         },
        {
             ISBN:'GR1246L',
             leidimoMetai: 2000,
             Pavadinimas:'Pavadinimas: Kafka',
             puslapiuSkaicius:'Paslapius skaicius: 180'
         },
        
     ],
      
    Negrozines:[
             {
                 ISBN:'GR1245S',
                 leidimoMetai: 2011,
                 Pavadinimas:'Pavadinimas: Ekonomikos pradziamokslis',
                 puslapiuSkaicius:'Puslapius skaicius: 500'
             },
             {
                 ISBN:'GR1265I',
                 leidimoMetai: 2010,
                 Pavadinimas:'Pavadinimas: Finansai ir pinigai',
                puslapiuSkaicius:'Puslapiu skaicius: 600'
             },
            {
                 ISBN:'GR126KL',
                leidimoMetai: 2015,
                 Pavadinimas:'Pavadinimas: Gyvenimas',
                 puslapiuSkaicius:'Puslapiu skaicius: 700'
             },
            {
                 ISBN:'GR1212L',
                 leidimoMetai: 2000,
                Pavadinimas:'Menulis',
                 puslapiuSkaicius:'Puslapiu skaicius: 300'
             },
         ],
        Saviugda:[
        {
            ISBN:'GR1213O',
            leidimoMetai: 2015,
            Pavadinimas:'Pavadinimas: Atrask save per 10min',
             puslapiuSkaicius:'Puslapiu skaicius: 150'
        },
        {
            ISBN:'GR1213J',
            leidimoMetai: 2023,
            Pavadinimas:'Pavadinimas: Kas TU?',
            puslapiuSkaicius:'Puslapiu skaicius: 80'
        },
        {
            ISBN:'GR1239P',
            leidimoMetai: 2021,
            Pavadinimas:'Pavadinimas: Laimes abecele',
            puslapiuSkaicius:'Puslapiu skaicius: 300'
        },
        {
            ISBN:'GR1261R',
            leidimoMetai:  2021,
            Pavadinimas:'Pavadinimas: Kur deti taska ant I?',
            puslapiuSkaicius:'Puslapiu skaicius: 600'
        }
        
    ]
    }

    // let div = document.getElementById('collapseOne');
    // console.log(div);
    // let div1 = document.getElementById('collapseOne').firstElementChild;
    // console.log(div1);


function book(a){
    let accordionBody = document.querySelectorAll('.accordion');
    // console.log("accordionBody: ", accordionBody[0]);

    // if accordion exist
    if(accordionBody.length > 0){
        let book = 0;
        let accItem = accordionBody[0].querySelectorAll(".accordion-item");
        // console.log("accItem: ", accItem);
        for(let item in a){
            let accBody = accItem[book];

            // Accordion Header
            let accH2 = accBody.getElementsByTagName("h2")[0];
            let accBtn = accH2.getElementsByTagName("button")[0];
            accBtn.innerText = item;

            // Accordion Content
            let accContent = accBody.getElementsByClassName("accordion-body")[0];
            accContent.innerText = '';

            // Add book descriptions
            for(let opt in a[item]){
                let ul = document.createElement("ul");

                // ISBN
                let li01 = document.createElement("li");
                let li01Text = document.createTextNode(a[item][opt].ISBN);
                li01.appendChild(li01Text);
                
                // leidimoMetai
                let li02 = document.createElement("li");
                let li02Text = document.createTextNode(a[item][opt].leidimoMetai);
                li02.appendChild(li02Text);

                // Pavadinimas
                let li03 = document.createElement("li");
                let li03Text = document.createTextNode(a[item][opt].Pavadinimas);
                li03.appendChild(li03Text);
                
                // puslapiuSkaicius
                let li04 = document.createElement("li");
                let li04Text = document.createTextNode(a[item][opt].puslapiuSkaicius);
                li04.appendChild(li04Text);

                // console.log("opt", a[item][opt]);

                ul.append(li01, li02, li03, li04);
                accContent.appendChild(ul);
            }
            // console.log("item: ", item);

            // console.log("a["+book+"]", a[item]);
            book++;
        }

    } else {
        console.log("Accordion dont found!");
    }
    
    return;

    // old version...
    var h2Elm = document.querySelectorAll('h2');
    console.log("a: ", a);
    console.log("h2Elm: ", h2Elm);
    console.log("h2Elm[0]: ", h2Elm[0]);
    console.log("h2Elm[0].find: ", h2Elm[0].getElementsByTagName("button")[0].innerText);
    var accordtion = 0;
    for(let item in a){
        let btn = h2Elm[accordtion].getElementsByTagName("button")[0];
        btn.innerText = item;
        accordtion++;
        console.log("$value", `${item}:`);


        // for(let i=0; i < 4; i++){
        // let div1 = document.getElementById('collapseOne').firstElementChild;
        // console.log(div1);
        // let list = document.createElement('ul'), ul, li;
        // ul = document.createElement("ul");
        // for(let j=0; j < 4; j++){
        //     li = document.createElement("li");
        //     li.appendChild(li);
            
    //     }
    // }
    }
//     for(let item in a){
//     console.log("$value", `${item}:`);
//     for(let i in a[item]){
//         console.log(a[item][i].ISBN)
        
//         let value = a[item][i].leidimoMetai
//         if(a[item][i].leidimoMetai >= 2018){
//             value = value + (" (Nauja knyga)")
//         }
//         console.log("value", value)
//         console.log("a[item][i].Pavadinimas", a[item][i].Pavadinimas)
//         console.log(a[item][i].puslapiuSkaicius)
       
        
//     }
// } 
// }
}

book(books);


//headingOne