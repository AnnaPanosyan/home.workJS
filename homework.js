//task1
// Given an array of numbers. Print frequency of each unique number. (Frequency is the
//     count of particular element divided by the count of all elements)

function div(a,b){
    return a/b
}

function countOfMember(arr){
let count = 1
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length; j++){
           if(arr[i]===arr[j]){
            i++;
            count++
           }
        }
    }
return count
}

let arr = [1,2,3]
let length=arr.length
let count = 1;
let count1
let ar=[]
for(let i = 0; i < length; i++){
    if(!(arr.includes(arr[i],i+1))){
         count=1
     }else{
         count1 = countOfMember(arr,arr[i])
    }
}
arr.sort()
for(let i=0; i<arr.length; i++){
    if(!(arr.includes(arr[i],i+1))){
    ar.push(arr[i])
    console.log(ar[i] + ":" + div(count,length))
}else{
    continue
    console.log(ar[i] + ":" + div(count1,length))
}
}