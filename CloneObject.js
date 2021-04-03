const circle=
{
    radius: 34,
    price: 33,
    draw :function(){
        console.log('draw');
    }
}

//using for-in method-old way 
const object2={}
console.log(object2);
for(let key in circle)
object2[key]=circle[key];
console.log(object2);

//spready way-easiest way to do
const obj3 = {...circle};
console.log(obj3);

//using assign method -new way to do
const obj4 = Object.assign({},circle);
console.log(obj4);
console.log(obj4.draw());