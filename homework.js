//task1
// Given an array of numbers. Print frequency of each unique number. (Frequency is the
//     count of particular element divided by the count of all elements)

function div(a,b){
    return a/b
}
function countOfMember(arr,e){
    let count = 0;
    arr.sort();
    for(let i = 0; i < arr.length; i++){
        if(e === arr[i]){
            count++
        }
    }
return count
}

let length = prompt('Enter a number');
let arr = [];
for(let i = 0; i < length; i++){
    arr[i] = prompt("Please enter a number");
}

let count = 1;
let count1;
arr.sort();
for(let i = 0; i < length; i++){
    if(!(arr.includes(arr[i],i+1))){
         count = 1
         console.log(arr[i] + ":" + div(count,length))
     }else{
          count1 = countOfMember(arr,arr[i])
          i = i + count1 - 1
          console.log(arr[i] + ":" + div(count1,length))
    }
}

// task2
// Write a function that accepts a string(a sentence) as a parameter and finds the longest
// word within the string․ If there are several words which are the longest ones, print the
// last word(words can be separated by space, comma or hyphen).

let string = 'Which would be worse to live as a monster or to die as a good man?'
function gerLongestWord(str){
    let maxLength = 0;
    let arr = [];
    let longestWord = '';
    arr = str.split(' ');
     for (let i = 0; i < arr.length; i++){
         if (arr[i].length >= maxLength){ 
            maxLength = arr[i].length;
            longestWord = arr[i];
            }  
      }
return longestWord
}
console.log(gerLongestWord(string))

// task4
// Write a function to compute a new string from the given one by moving the first char to
// come after the next two chars, so &quot;abc&quot; yields &quot;bca&quot;. Repeat this process for each
// subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.

function move(str){
    let result = '';
    let length;
    let div3 = str.length  %  3  ===  0
    if(div3){
        length = str.length
    }else{
        length = str.length - str.length % 3
    }
    for(let i = 0; i < length; i++){
        if(!div3){
            result = result + (str.slice(i+1,i+3) + str[i]) + str.slice(-str.length % 3)
            i = i + 2;
        }else{
            result = result + (str.slice(i+1,i+3) + str[i])
            i = i + 2;
        }
    }
return result
}
    
