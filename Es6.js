                    /*************** JAVASCRIPT ES6 ***************/

                    Block - Scoped Constructs Let and Cont
                    Arrow Function
                    Rest Parameter
                    Destructuring Assignment in ES6
                    Default Parameters in ES6
                    Template Literals in ES6
                    Multi-line String in ES6
                    Enhanced Object Literals in ES6
                    Promises in ES6
                    Modules

1. Block-Scoped Const Let

=>  var: Khai báo kiểu global( Hạn chế sử dụng) 
=>  let: Khai báo kiểu block scoped phạm vi hoạt động trong {} được khai báo chính nó và scoped con {}
=>  const: Khai báo kiểu hằng số( Giá trị không thay đổi) phạm vi hoạt động trong {} được khai báo chính nó và scoped con {}

2. Arrow function

let name =()=>{}    
=> Giúp code clear hơn, rõ ràng hơn

3. Destructuring Assignment 
- ex1   Arr
let date = [10,03,2020]
let [d,m,y] = date        d=10,m=03,y=2020

- ex2     Obj
var person = {name:'name',email:'email.com'}
var {name: myname,email: email} = person

- ex3    gan truc tiep
var person = {name:'name'}
var {name: myname,,email:'email.com'} = person
=> Tiện cho việc gán nhiều giá trị không cần phải truy xuất nhiều

4: Default Parameters

// // const Valid = giatrineuco || giatrimacdinh
const name = Obj.name || "Nguyen Van Dat"

=> Làm cho code trực quan dễ hiểu, người mới nhìn vào cũng có thể hiểu

5: Rest Parameters( tham số còn lại)

let ListValue = (value1,value2,...values)=>{}
ListValue(1,2,3,4,5,6,7,8)
...values = [3,4,5,6,7,8]

=> Code ngắn hơn thay vì truyền toàn bộ 8 tham số vào ta dùng '...'


6:Template Literals(`Chữ mẫu`)
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."

`${str0}${personExp}${str1}${ageStr}`
// truyxuat Str.raw[index]


7: Multi-line String
const multilineString1 = `A string
on multiple lines`

const anotherMultilineString = `Hey
this is cool
a multiline
st
r
i
n
g
!
`
console.log(anotherMultilineString)


8. Promises
let waiting1000 =()=> new Promise((res,rej)=>{setTimeout(res,1000)})

waiting1000()
    .then(()=>console.log('SuccessFul'))
    .catch(()=>console.log('Error !'))

Promise su ly bat dog bo qua trong thai resolve(thanh cong) va reject(that bai),

9. Classes

class People{
    constructor(id,made){
        this.id=id
        this.made=made
    }
    getName() {
        console.log(this.id+":"+this.made)
    }
}
class Account extends People{
    constructor(id,made,avt){
        super(id,made)
        this.avt = avt
    }
}
let myacc = new Account(1,'male','link avt')
myacc.getName()

=> Ngan gon hon , de nhin hon , truy xuat vao property trong acitve() cua obj de dang hon this.propertyname

10. Modules
ES5  không hỗ trợ module
Es6 có thể sử dụng các import và export.

file exports.js
module.exports = {
    port: 3000,
    getAccounts: function() {
    }
  }

file import.js
  var service = require('module.js') 
  console.log(service.port)
hoac
 import {port, getAccounts} from 'module'
console.log(port)
aa