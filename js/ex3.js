"use strict";

firstTask();

function firstTask() {
    for(let i = 5; i<= 10; i++){
        console.log(i);
    }    
}

secondTask();
function secondTask() {
   for(let i = 20; i >= 10; i--){
        if(i == 13){
            break;
        }
        console.log(i);
   }    
}

thirdTask();
function thirdTask() {
    for(let i = 1; i <= 10; i++){
        if(i%2 == 0){
            console.log(i);
        }
    }

    let j = 1;
    while(j <= 10){
        if(j%2 == 0){
            console.log(j);
        }
        j++;
    }
    
}