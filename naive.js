const input = require(`readline-sync`)
let s = input.question("Enter the String")
let key = input.question("Enter the key");
let x = s.length;
let y = key.length; 

for(let i=0;i<=x-y;i++){
    let j ;
    for(j=0;j<y;j++){
        if(s[i+j]!=key[j]){
            break;
        }
    }
    if(j==y){
        console.log(`found at index ${i}`);
    }
}
// console.log(count);