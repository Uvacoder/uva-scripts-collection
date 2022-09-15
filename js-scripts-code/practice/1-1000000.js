// If you were to write out all the numbers between 1 and 1,000,000 and then add up all the ones that are a multiple of 3 and of 5, what would be the sum?

function sum(){
    let arr = Array.from({length: 1000000}, (v,i)=>i+1)
    let ttl = 0
    arr.forEach((item) => {
        if(item % 3 === 0 && item % 5 === 0){
            ttl += item
        }
    })
    // console.log(arr.pop())
    return ttl
}
console.log(sum())