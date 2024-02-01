//this keyword
// const user={
//     username:"Avinash",
//     price:999,
//     welcomemessage:function(){
//         console.log(`Mr. ${this.username} welcome!!!`)
//     console.log(this)
//     }
// }

// user.username="Himani"
// user.welcomemessage()

// console.log(this)



// //not owrk
// function chai(){
//     let username="Avinash"
//     console.log(this.username)
//     console.log(this) //work
// }
// chai()


//creating arrow function 
// const chai=()=>{
//     let username="Avinash"
//     console.log(this.username)
// }
// chai()

// const add=(n1,n2)=>{
//     return n1+n2
// }

// console.log(add(2,2))


//implicit returm


// const add=(n1,n2)=>(n1+n2)

// const add=()=>({
//     username:"Avinash",
//     age:23
// })
// console.log(add())



// IIFE(Immediately invoke function experession)
// to prevent from the global scope pollution

//named iffe
(function chai(){
    console.log("Chai")
})();


// the above semeicolone is important to stop tje obe above function execution
((name)=>{console.log(`${name}`)})('Avinash');



































