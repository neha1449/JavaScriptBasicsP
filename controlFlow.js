//6AM to 12PM -Good Morning
//12Pm to 6PM -Good Afternoon
//else-Good Evening

let hour =7;
if (hour>=6 && hour<12){
    console.log('Good Morning');
    console.log('neha')
}
else if(hour>=12 && hour<=18)
{
    console.log('Good Afternoon');
}else(console.log('GooD Evening'))

//other way 
 hour =17;
if (hour>=6 && hour<12)    console.log('Good Morning');
else if(hour>=12 && hour<=18)    console.log('Good Afternoon');
else console.log('GooD Evening');


console.log('----------Get Max Number--------');

let x=53;
let y=52;
let z=8;

if(x>y && x>z) console.log('x is greatest');
else if (y>z) console.log('y is greatest');
else console.log('z is greatest');


//Switch Case
let role='Pilot';
switch(role)
{
    case 'Doctor':
        console.log('MBBS');
        break;
    case 'Pilot':
        console.log('BA');
        break;
    default:
    console.log('Engineer');
    break;


}
