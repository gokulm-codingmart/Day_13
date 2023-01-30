const input = require(`readline-sync`)

function findMatch(){
    let res = [0]
    for(let i=1;i<temp.length;i++){
        let left = 0,right = i,count = 0;
        while(right<temp.length && temp.charAt(left)==temp.charAt(right)){
            left++;
            right++;
            count++;
        }
        res.push(count)
    }

    //printing

    for(i=0;i<res.length;i++){
        if(res[i]==key.length){
            console.log(`Match found at index ${i - (key.length+1)}`);
        }
    }
}


let str = input.question("Enter the input string : ")
let key = input.question("Enter the key string : ")
let temp = key+'$'+str;

findMatch();