//Day 5 task

// Print odd numbers in an array

(function(a,b){
    let odd=[];
    for(i=a;i<=b;i++){
        if(i%2!==0){
            odd.push(i);

        }

    }
    console.log(odd);
})(3,20);


// Convert all the strings to title caps in a string array

let cars=["benz","audi","bmw","jaquar"];
(function(stringofarray){
let arraycaps=[];
let length=stringofarray.length;
for(i=0;i<length;i++){
    arraycaps.push(stringofarray[i].toUpperCase())
}
console.log(arraycaps);
})(cars);



// Sum of all numbers in an array

(function(numarray){ 
let sum=0;
for(var num of numarray){
 sum=sum+num;
}
console.log(sum);
})([1,2,3,4,5]);





// // Return all the prime numbers in an array

(function(num){
    let primenum=[];
    for(let i=2;i<=num;i++){
        flag=0;
        for(let j=2;j<i;j++){
            if(i%j==0){
                flag=1;
               break;
            }
        }
        if(flag==0){
            primenum.push(i);
        }
    }
    console.log(primenum);
})(10); // enter any number..it will all prime number upto the given number




// // Return all the palindromes in an array
let strarray=["malayalam","madam","adada","musthafa"];


(function(strarray){
let paliarray=[];
for(i=0;i<strarray.length;i++){
    let pstr="";

    for(let j=strarray[i].length-1;j>=0;j--){
        pstr=pstr+strarray[i][j];
    }
    if(pstr==strarray[i]){
        paliarray.push(pstr);
    }

};
console.log(paliarray);
})(strarray);



// Return median of two sorted arrays of same size
// 
let arr1=[1,11,5,3];
let arr2=[7,14,9,8];
(function(arr1,arr2){
var concat=arr1.concat(arr2).sort((a,b)=> a-b);
var length=concat.length;
// if(length%2==1){             //these lines can un command if the array are in different size
//     console.log(concat[((length)/2)-0.5]);
// }
// else{
  console.log((concat[length/2]+concat[(length/2)-1])/2)
// }

})(arr1,arr2)


// Remove duplicates from an array


var c=[1,2,3,2,3,5,6,1]

var a = ["a","b","c","c","a","b","d"];
(function(a){
let b =[...new Set(a)];
console.log(b);
})(c);





// Rotate an array by k times

var noarray =[1,2,3,4,5];
let k=3;
(function(num,k){
  let i=0;
  while(i<k){
    noarray.unshift(noarray.pop());
    i++
  }
  console.log(noarray)

})(noarray,k);




// arrow function
// Print odd numbers in an array



const oddnum=(a,b)=>{
    let odd=[];
    for(i=a;i<=b;i++){
        if(i%2!==0){
            odd.push(i);

        }

    }
    return odd;
};
console.log(oddnum(3,20));

// captize the string by arrow function
// let cars=["benz","audi","bmw","jaquar"];

const caparray=(stringofarray)=>{
let arraycaps=[];
let length=stringofarray.length;
for(i=0;i<length;i++){
    arraycaps.push(stringofarray[i].toUpperCase())
}
return arraycaps;
};
console.log(caparray(cars));


// // Sum of all numbers in an array by arrow function

const sumofnum=(numarray)=>{ 
    let sum=0;
    for(var num of numarray){
     sum=sum+num;
    }
    return sum;
    }
    console.log(sumofnum(([1,2,3,4,5])));




    // Return all the prime numbers in an array by arrow function



const primenumber=(num)=>{
        let primenum=[];
        for(let i=2;i<=num;i++){
            flag=0;
            for(let j=2;j<i;j++){
                if(i%j==0){
                    flag=1;
                   break;
                }
            }
            if(flag==0){
                primenum.push(i);
            }
        }
        return primenum;
    }
    console.log(primenumber(10));





    // Return all the palindromes in an array
//by arrow function





// let strarray=["malayalam","madam","adada","musthafa"];


 const palindromes=(strarray)=>{
        let paliarray=[];
        for(i=0;i<strarray.length;i++){
            let pstr="";
        
            for(let j=strarray[i].length-1;j>=0;j--){
                pstr=pstr+strarray[i][j];
            }
            if(pstr==strarray[i]){
                paliarray.push(pstr);
            }
        
        };
        return paliarray;
        }
        console.log(palindromes(strarray))
    


