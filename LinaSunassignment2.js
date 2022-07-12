const itemObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
]
let arr = []
let arr2 = []
let sum = 0
itemObject.forEach((item) => {
  arr.push(item.quantity * 2, item.price * 2)
  sum += item.quantity + item.price
  if (item.quantity > 2 && item.price > 300) {
    arr2.push(item.quantity, item.price)
  }
})
console.log('Q1：', arr)
console.log(arr2)
console.log(sum)

const string =
  ' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  '

str = string.trim().toLowerCase()
console.log('Q2: ', str.replace(/   |-|  /g, ' '))

function mergeArrays(arrays, value) {
  const merged = {}
  arrays.forEach((arr) => {
    arr.forEach((item) => {
      merged[item[value]] = Object.assign({}, item, merged[item[value]])
    })
  })

  return Object.values(merged)
}

const first = [
  { uuid: 2, name: 'test' },
  { uuid: 5, name: 'test5' },
  { uuid: 3, name: 'test3' },
]

const second = [
  { uuid: 6, role: 'pm' },
  { uuid: 4, role: 'engineer' },
  { uuid: 1, role: 'manager' },
  { uuid: 2, role: 'associate' },
]
let newarr = mergeArrays([first, second], 'uuid')
for (let i = 0; i < newarr.length; i++) {
  let k_role = { role: 'null' }
  let k_name = { name: 'null' }
  for (let key in newarr[i]) {
    if (newarr[i].hasOwnProperty('role')) {
    } else {
      Object.assign(newarr[i], k_role)
    }
  }
  if (newarr[i].hasOwnProperty('name')) {
  } else {
    Object.assign(newarr[i], k_name)
  }
}
console.log('Q3：', newarr)
