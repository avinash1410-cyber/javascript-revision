// function add(n1,n2){
//     return n1+n2
// }

// let a=add(3,4)
// console.log(a)

// function greeting(name="Avinash"){
//     if (!name){
//         console.log("plz enter a username")
//         return
//     }
//     console.log(`hello mr ${name}`)
// }

// greeting("Ashish")



//rest opeartor
// function calculatesum(...num){
//     return num // return a array of i/p
// }



// function calculatesum(v1,v2,...num){
//     return num // return a array of i/p
// }

const user={
    username:"Avinash",
    price:199
}

function handleobject(user){
    console.log(user)
    console.log(`user name is ${user.username} and the price is ${user.price}`)
}

// console.log(calculatesum(7,6,3,4,3))

// handleobject(user)

handleobject({
    username:"Ashish",
    price:400
})

function score(getarray){
    return getarray[4]
}
console.log(score([4,8,3,7,5]))














