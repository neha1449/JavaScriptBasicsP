function getData(name,age){

return {
    name,
     age, 

    personalDetails(){
        console.log('Hello'+ ' ' +name +' '+age );
    },

   
}}


let c=getData('neha',29);
console.log(c.name);
console.log(c.age);
console.log(c.personalDetails());


//constructor function
function Circle(radius){
         this.radius = radius;
        this.draw = function () {
            console.log("Draw");
        }}
    




const a = new Circle(2);
console.log(a.radius);
console.log(a.draw());