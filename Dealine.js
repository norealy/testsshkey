                    /***************JAVASCRIPT***************/

//* Tao danh sach mua sam
let shoppinglist = []
shoppinglist.push(["pants",2])
shoppinglist.push(["shirt",2])
shoppinglist.push(["shoes",1])
shoppinglist.push(["hat",2])
shoppinglist.push(["briefcase",3])
console.log(shoppinglist)
shoppinglist.pop()   // Lay ra phan tu cuoi danh sach, va cung xoa di khoi mang 
console.log(shoppinglist)
shoppinglist.shift() // Lay ra phan tu Dau danh sach, va cung xoa di khoi mang 
console.log(shoppinglist)
shoppinglist.unshift(['Cream',3])   // Them ra phan tu Dau danh sach
shoppinglist.unshift(["briefcase",3])   // Them ra phan tu Dau danh sach
console.log(shoppinglist)


//* splice() xoa cac phan tu khoi arr, chi chua cac phan tu co tong = 10
const arr = [2,4,5,1,7,5,2,1]
arr.sort()
console.log("array bandau :",arr)
console.log("Phan tu co tong  = 10 :")
arrSum10 = []
for(let i=arr.length-1;i>=0;i--){
    let arrKey = []
    let sum = arr[i]
    for(let j=i-1;j>=0;j--){
        sum += arr[j]
        if(j>=0&&sum>10){
            arrKey.push(j)
            sum-=arr[j]
        }
        if(j==0&&sum<10){
            arrKey.push(j)
        }
    }
    if(sum==10){
        arrKey.forEach((item)=>{
            arr.splice(item,1)  // Xoa di phan tu tai vi tri item va chi xoa 1 phan tu
        })
        break
    }else{
        arrKey.push(i)
    }
}
console.log(arr)


//* Splice() xoa 2 phan tu dau, them 'DarkSalmon',''BlanchedAlmond' vao vi tri do
arr1 = ['DarkGoldenRod','WhiteSmoke','LanvenderBlush','PaleTurQuoise','Firebrick']
arr1.splice(0,3)                // Xoa di tu phan tu thu 0->3
arr1.unshift('DarkSalmon','BlanchedAlmond')
console.log(arr1)


//* Choi gold
let arrStrokes = ['Hole-in-one','Eagle','Birdie','Par','Bogey','Double Bogey','Go home']
function check(par,strokes){
    switch(strokes){
        case 1:
            console.log(arrStrokes[0])
            break
        case par-2:
            console.log(arrStrokes[1])
            break
        case par:
            console.log(arrStrokes[2])
            break
        case par+1:
            console.log(arrStrokes[3])
            break
        case par+2:
            console.log(arrStrokes[4])
            break
        default:
            console.log(arrStrokes[6])
            break
    }
}
check(3,8)


//* Tro choi song bac Blackjack
function CountCard(card){
    if(card>1&&card<=6) return 1
    else if(card<=9) return 0
    else{
        return -1
    }
} // 1 Ham tuy vao dieu kien return ra cac gia tri khac nhau de su dung
function jack(){
    let arrayCard = [2,3,'A',8,9,'J','K']
    var count=0;
    arrayCard.forEach((item)=>{
        count += CountCard(item)
    })
    if(count>0){
        console.log(count+" Bet")
    }else{
        console.log(count+" Hold")
    }
}
jack()


//*  Thay doi value co key cho truoc cua 1 Obj
const userActivity = {
    "id":0987678,
    'date':'Januany 1,2020',
    'data user':{
        totalUsers:51,
        online:42,
    }
}
function Update(key,valueChange){
    userActivity[key]=valueChange      // Thay doi gia tri 1 thuoc tinh cua Obj ta su dung Obj[key], Khong su dung duoc Obj.key vi se hieu nham key la ten 1 thuoc tinh
}
Update('data user',{ totalUsers: 30, online: 32 })
console.log(userActivity)


//* Add property bananas,grapes vao Obj foods
const foods = {
    'apples':25,
    'oranges':32,
    'plums':28,
}
foods.bananas = 13;  // Them property cho Obj chi can su dung Obj.nameProperty = value
foods.grapes = 35;
console.log(foods)


//*  UpdateRecords
var collection = {
    2548:{
        albumTitle:'Slippery when wet',
        artist:'Bon Jovi',
        tracks:['Prince']
    },
    1245:{
        albumTitle:'Robert Palmer',
        tracks:[]
    },
    5439:{
        albumTitle:'ABBA Gold',
    }
};
function UpdateRecords(obj,id,prop,value){
    if(prop!='tracks'&&value!=null){
        obj[id][prop] = value
    }else if(prop=='tracks'&&obj[id].hasOwnProperty('tracks')==false){ //hasOwnProperty kiem tra thuoc tinh co ton tai trong Obj khong,tra ve 'true' or 'false'
        obj[id].tracks=[]
        obj[id].tracks.push(value)
    }else if(prop=='tracks'&&value!=null){
        obj[id].tracks.push(value)
    }
    if(value==null){
        delete obj[id][prop]
    }
    return obj
}
let obj = UpdateRecords(collection,5439,'albumTitle',null)
let obj1 = UpdateRecords(collection,1245,'tracks','ok')
console.log(obj)


//* Tao mang 5->0 While
let i=5;
let arrayInt = []
while(i>=0){   // While(dieukienvonglap)
    arrayInt.push(i)
    i--;
}
console.log(arrayInt)

//* Tao mang 1->5 For
arrayInt = []
for(let i=1;;i++){  // for(gia tri bat dau, dieu kien vong lap, quy luat vong lap)
    arrayInt.push(i)
    if(i===5) break
}
console.log(arrayInt)


//* Tao mang 1->9 SO le For
arrayInt = []
for(let i=1;;i+=2){
    arrayInt.push(i)
    if(i===9) break
}
console.log(arrayInt)

//* Xoa phan tu trong mang duoc chuyen vao
arrayInt = [1,1,2,4,true,'Del']
function del(arr,value){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==value){
            arr.splice(i,1)
            i--             // Sau khi xoa 1 phan tu di thi ta can lui lai 1 phan tu de tiep tuc, neu khong se bi bo qua phan tu sau phan tu da xoa
        }
    }
    console.log(arrayInt)
}
del(arrayInt,'Del')

//* Su dung for...in dem so luong nguoi online
const users = {
    Alan:{
        age:27,
        online: true
    },
    Jeff:{
        age:27,
        online: false
    },
    Sarah:{
        age:27,
        online: true
    },
    Ryan:{
        age:27,
        online: true
    },
}
let count = 0
for(let user in users){ // key in Obj , Lap qua cac key
    count += (users[user].online == true ) ? 1 : 0 // Toan tu 3 ngoi  Bien = (dieu kien)?(gia tri dung):(gia tri sai)
}
console.log('Soluog Online : '+count)

//* Sua mang trong 1 Obj
let user = {
    name:'Join',
    age:28,
    data:{
        username:'kennetCodesAllDay',
        date:'march 26 2020',
        organization:'freeCodeCamp',
        friends:[
            'Sam','Kira','Tomo',
        ],
        local:{
            city:'San Francisco',
            state:'CA',
            country:'USA'
        },
    },
}
function addFriends(user,friend){
    user['data']['friends'].push(friend) // Truy cap doi tuong trong doi tuong ObjPerents[key1][key2][...keyn]
    return user
}
const Addeduser = addFriends(user,"Nguyen Van Dat")
console.log(Addeduser)

//* Tinh tich cua cac subArr trong arr
var myArr = [[1,2],[3,4],[5,6,7]]
for(let i=0;i<myArr.length;i++){
    let S = 1
    for(let j=0;j<myArr[i].length;j++){
        S *= myArr[i][j]
    }
    console.log(S)
}

//* Viet ham de quy tra ve tong n phan tu dau trong mang
let arrDQ = [2,4,5,1,7,5,2,1]
function Recursive(arr,n){
    if(n<=0){return 0}  // Dieu kien dừng cua Recursive
    return arr[n-1] + Recursive(arr,n-1)   // Ham Recursive duoc goi lai trong chinh no vs params n-1 de tinh cac so phia truoc no 
    // De quy la goi lai ham dang su dung den 1 dieu kien dung nhat dinh.
}
console.log(Recursive(arrDQ,5))
