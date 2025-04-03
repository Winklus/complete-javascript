JavaScript Comparison Operators

Operator 	 Description
== 	 equal to
=== 	equal value and equal type
!= 	 not equal
!== 	 not equal value or not equal type
> 	greater than
< 	less than
>= 	 greater than or equal to
<= 	 less than or equal to
? 	ternary operator

== equal to
=== equal value and equal type
!= not equal
!==


let a = 7;
let b = "7";
a == b // true
a === b // false
class work
Form: Hand written
write down the symbol for each of the following comparison operator

declare two variable  of type integer and assign a value to them, then use the variables to carry out each of the following comparison above

let a = 7;
let b = 5;

a == b // false
a === b // false
a > b // true
a < b // false
a >= b // true
a <= b // false
a != b // true
a !== b // true
a > b ? a : b // 7


let c = 7;
let d = "7";

c == d // true
c === d // false

let aGirl = 20;
let bGirl = 18;
aGirl > bGirl

let write some code

function gA(a){
  if(a > 18){
    console.log("you can buy a drink")
  }else{
    console.log("you are a minor")
  }
}

const giveAccess = (age) =>  age > 18 ? console.log("you can buy a drink") : console.log("you are a minor");
giveAccess(20);
