const circle={
radius:1,
color:'red',
log(){
    console.log('hello world happy world', this.color);

    }

}

console.log(circle);
//add more propties in object
circle.ispresent=true;
circle.draw=function()
{
    console.log('draw world');
}


console.log(circle);

delete circle.color;
console.log(circle);