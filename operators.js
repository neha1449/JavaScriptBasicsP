 
 
 
 //Arithmemtic operators
 let x=100;
 let y=2;
 console.log(x**y);

 //++ and --
 
 console.log(++x);
  console.log(x++);
  console.log(x);

  let p=9;
  let q =p--;
  console.log(p); //8
  console.log(q); //9

  //Assignment operator  
  let z=5;
  z*= z;
  console.log(z); //25

   z+= 4;
  console.log(z); //29

  //comparison operator
let a=10;
//console.log(a>=10);

console.log('10'===10);  //false
console.log('10'==10); //true
console.log(10===10); //true
console.log(10==10); //true
console.log(true===1); //false
console.log(true==1); //true
 
//Ternary operators
let points=110;
let type= points>190 ? 'Gold':'Silver';
console.log(type);


//Logical Operators
let income =1;
let credscore =0;
let eligibility = income || credscore;
console.log(eligibility);
eligibility = income && credscore;
console.log(eligibility);
console.log(!eligibility);

//falsey   

console.log(false|| 3 ||2); //3
console.log(false||undefined); //undefined
console.log(true||null);

// Example

let usercolour ='blue';
let defaultcolour ='white';
let currentcolor = usercolour ||defaultcolour;
console.log(currentcolor); //white
usercolour=false;
currentcolor = usercolour ||defaultcolour;
console.log(currentcolor); //white

//swap 2 values
let u=6;
let k=4;
u=u+k;
k=u-k;
u=u-k;
console.log(u);
console.log(k);