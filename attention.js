let n = [1,2,3,4,5,6,7]
let len = n.length;
let res = new Array(len).fill(1)

// left to right
for(let i=0;i<len;i++){
    if(n[i+1]<n[i]){
        res[i+1] = res[i] + 1
    }
}
// // right to left
for(let i= len-1;i>=0;i--){
    if(n[i]>n[i-1]){
        if(res[i-1]<=res[i]+1)
        res[i-1] = res[i]+1
    }
}
console.log(res);
