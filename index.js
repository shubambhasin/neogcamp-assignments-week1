

// colors problem

const colors = ['red','blue','green','pink','aqua']

const moreColors = [...colors, 'crimson', 'whitesmoke']

console.log(moreColors)

// Q2

const data = {name:'name', age: 23}
const birthday = (dataObj) => {

  let newData = {
    ...dataObj, age: dataObj.age + 1
  }

console.log(newData)
}

birthday(data)

// page 8

// QUESTION

const numArr = [23,12,5,3,4,2,76,45,33,21]

const numLessThanTen = numArr.filter(num => num < 10)

console.log(numLessThanTen) // prints number less than 10

//QUESTION

// taking above numArr

const arrOfObj = numArr.map(num => ({item: num}))
console.log(arrOfObj)

// QUESTION

const sum = numArr.reduce((a, b) => a+b, 0)

console.log("Total sum = ", sum)


// PAGE 11

// QUESTION (a, b)

const numberArray = [1,2,3,4,5,6,7,8,9,22,11,32,23,43,37,86,54,31,19, 10,20,100]


const oddSum =  numberArray.filter(num => num%2 !=0) 
const evenSum = numberArray.filter(num => num%2==0)
console.log("oddSum = ",oddSum.reduce((a,b) => a+b, 0))
console.log("evensum = ",evenSum.reduce((a,b) => a+b, 0))

// QUESTION (c)

const max = Math.max(...numberArray)

console.log("Largest number ",max)


// QUESTION (d)

const numDivBy10 = numberArray.filter(num => num%10 ==0)

console.log(numDivBy10)


// QUESTION (e)
const OddPlusOneEvenMinusOne = numberArray.map((num) => num%2 == 0 ? num-1 : num + 1  )


console.log(OddPlusOneEvenMinusOne)

// QUESTION (f)