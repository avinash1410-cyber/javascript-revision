//singletoo

//object literals
const jsuser={
    fullname:"Avinash Kumar",
    name:"Avinash",
    age:24,
    city:"delhi",
    active_days:["mon","tues","wed"]
}

// console.log(jsuser.active_days)

// console.log(jsuser["fullnam]") //notwork
// console.log(jsuser.fullname) //work
// console.log(jsuser["active_days"])


// Object.freeze(jsuser)
// jsuser.email="avi@gmai8l.com" now work due to freeze
// console.log(jsuser.email)



// jsuser.greeting=function(){
//     console.log(`good Morning  ${jsuser.name}`)
// }


// jsuser.greetingtwo=function(){
//     console.log(`good Morning in two  ${this.name}`)
// }


// console.log(jsuser.greetingtwo())



/////Singleton/////
const tinderuser=new Object()
tinderuser.id="123abc"
tinderuser.name="Avinash"
tinderuser.LoggedIn=false

// console.log(tinderuser)

const regularuser={
    email:"ak@gmail.com",
    fullname:{
        first:"Avinash",
        last:"Kumar"
    },
    address:{
        state:"Delhi",
        area:"Dayalpur",
        district:"North-east"
    }
}
// console.log(regularuser["address"]["district"])





const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}



// const obj3={obj1,obj2}


// const obj3=Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3)

// console.log(Object.keys(regularuser))

// console.log(Object.values(regularuser))



// console.log(Object.entries(regularuser))
// console.log(regularuser.hasOwnProperty("fullname"))





const course={
    coursename:"Js",
    courseprice:1000,
    courseteacher:"Hitesh"
}

const{courseteacher}=course
const{coursename}=course
const{courseprice:price}=course
console.log(courseteacher)
console.log(coursename)
console.log(price)








