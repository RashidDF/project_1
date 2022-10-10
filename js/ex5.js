"use strict";

const lines = 5;
let result = '';
let etoile = '*';

for(let i=lines; i>=0; i--){
    let espace='';
    for(let j=0; j<i; j++){
        espace += ' ';
    }
    result = espace + etoile + espace;
    console.log(result + '\n');
    etoile += '**';
}