let name='Neha';
let age=29;
age=30;
let colour='red';
console.log(name +' ' + age);


//------------primitive data type
let s1 ='Hello World';
let s2=30.00;
let s3=true;
let s4;
let s5=null;
let s6 =undefined;

console.log(typeof s2);


//------refrence data type

//Object
let user={
    n1 : "Neha Kathuria",
    n2:56,
};

user['n1']='Mart';
console.log(user['n1']='heri');


//Array
let language =['java','js','ruby'];
language[7]='c++';
console.log(language);
console.log(language[4]);


//functions

function checkgo(){
    console.log('in function');
}

//call the function
checkgo();


function getage(n)
{
console.log('Age is '  + '' + n  );
}

getage(3);


function add(n1,n2)
{
    return n1+n2;
}
let sum =add(1,22);
console.log(sum);