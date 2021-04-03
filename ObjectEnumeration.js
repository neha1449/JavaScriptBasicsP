let circle=
{
radius: 1,
log(){
    console.log('he');
}

}


for(let key in circle)
console.log(key);
console.log('--------------');

for(let key of Object.keys(circle))
console.log(key);

console.log('--------------');
for(let key of Object.entries(circle))
console.log(key);

if('radius' in circle)
console.log('yes');
if('draw' in circle)
console.log('yes');