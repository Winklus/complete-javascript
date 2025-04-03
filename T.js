
// * Problem: find two number from an array that add up to a target value.
var sumOfTwo = (numbs, target) => {

  const indexOfNumbs = new Map(); 
  for(let i = 0; i < numbs.length; i++){
    const com = target - numbs[i];
    if(indexOfNumbs.has(com)){
      return [indexOfNumbs.get(com), i]
    }
    indexOfNumbs.set(numbs[i], i)
  }
  throw new Error("the value is not found")

}
sumOfTwo([1,5,8,3,7,8,1,9,2,8], 17)

const countDown = (value, fn) => {
  fn(value)
  return(value > 0) ? countDown(value - 1, fn) : value;
}
countDown(10, value => console.log(value));


const checkPangramSet = string => {

  if(typeof string !== "string")
      throw new Error("the value you enter is not a string");

    let letterSet = new Set();

  for(const letter of string.toLowerCase()){
    if(/[a-z]/.test(letter)){
      letterSet.add(letter)
    }
  }
  return letterSet.size === 26;
      
}

checkPangramSet('"waltz, bad lymph, for quick jigs vex." is a pangram')














function frac(){

  let deno = 0
  try {
    return 18 / deno
  } catch (error) {
    console.log("you can't divide by zero")
  }
}
frac()










const chekPan = s => {
  if(typeof s !== "string")
    throw new Error("the word u enter is not a string")

  const lSet = new Set();
  for(const l of s.toLowerCase()){
    if(/[a-z]/.test(l)){

      lSet.add(l)
    }
  }
  return lSet.size === 26
}
chekPan('"waltz, bad lymph, for quick jigs vex." is a pangram');
























function checkPangramSet(string){


if(typeof string !== "string"){

  throw new Error("The value you pass is not a string")


  const letterSet = new Set();

  for(const letter of letterSet.toLowerCase()){

  }

  
}
}


let drinksArray = [21, "Michelle", true, 4.78, "Alicia"]

let names = new Array(5);
console.log(names.length)





const fibonacci = function(num){
  return num === 0 ? 0
            : num === 1 ? 1
            : fibonacci(num - 1) + fibonacci(num - 2);
}

fibonacci(10);