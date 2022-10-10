"use strict";
//1
console.log(firstTask());
function firstTask() {
    
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for(let i=0; i<arr.length; i++){
        result[i]=arr[i];        
    }    
    return result;
}


// 2
console.log(secondTask());
function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for(let i=0; i<data.length; i++){
        if(typeof(data[i])=="number"){
            data[i] *= 2;
        } else {
            data[i] += ' - done';
        } 
    }

    return data;
}

// 3
console.log(thirdTask());
function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    let compteur = 0;

    for(let i=data.length-1; i>=0; i--){
        result[compteur] = data[i];
        compteur++;
    }
    
    return result;
}