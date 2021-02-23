

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