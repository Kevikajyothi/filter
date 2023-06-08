let numbers=[1,2,3,4,5,6,7,8,9,10]
let Odd_Numbers=[]
for (let i=0;i<=numbers.length-1;i++) {
    if (numbers[i] % 2 !=0) {
        Odd_Numbers.push(numbers[i])
    }
}
console.log(numbers)
console.log(Odd_Numbers)
