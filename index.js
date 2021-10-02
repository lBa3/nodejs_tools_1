"use strict"


const faker = require('faker');
const fs = require('fs');
const Papa = require('papaparse');
/*
Referencia de los metodos dispobibles
https://marak.github.io/faker.js/#toc7__anchor 
*/

/* fehca de hoy personalizada dd_mm_yyyy  */
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //Enero es 0!
    let yyyy = today.getFullYear();
    today = dd + '_' + mm + '_' +  yyyy;
    let uui = faker.random.number();
    let nameFile = "./"+today+"_"+uui+".csv";  // construlle nombre del archivo


    let data = [
        {
            "nombre": "Rogelio",
            "apellido": "Batres",
            "edad": "33"
        },
        {
            "nombre": "Azaida",
            "apellido": "Wanreros",
            "edad": "43"
        }
    ];
     
    var textCsv = Papa.unparse(data);

    fs.writeFile(nameFile, textCsv, (error) => {
        if (error) {
            throw error;
        }
        console.log('Updated CSV file DONE!!');
    });


   
