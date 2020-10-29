const  check = false;
const fn = (data) =>{
    console.log(data + " working fine");
}
// String Interpolation
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

fn("babel ")

// for of 

let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1
        return {
           next () {
               [ pre, cur ] = [ cur, pre + cur ]
               return { done: false, value: cur }
           }
        }
    }
}

for (let n of fibonacci) {
    if (n > 1000)
        break
    console.log(n)
}

// find index
[ 1, 3, 4, 2 ].find(x => x > 3) // 4
[ 1, 3, 4, 2 ].findIndex(x => x > 3) // 2


// default parameter
function f (x, y = 7, z = 42) {
    return x + y + z
}
f(1) === 50

var data = `dsjfh msd
dfhgsdkjfhgdfsjk
sadfhskdgfskhdfg
sdfgjsdhfgjdksdjdksjd123g`;
