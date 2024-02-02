const objarr=[]
const hero=["Ironman","Batman","Spiderman","Aquaman","superman"]



// for (const name of hero) {
//     console.log(name)
// }


// hero.forEach(name => {
//     console.log(name)
// });


// const greet="Hello Good Morning"

// for (const g of greet) {
//     console.log(g)
// }

//maps





// const map=new Map()
// map.set('In',"India")
// map.set("USA","United states")
// map.set("uk","United kingdom")


// for (const [key,value] of map) {
//     console.log(key)
// }




// for (const key of map.keys()) {
//     console.log(key)
// }





// array.forEach(element => {
    
// });
// console.log(map)






// const games={
//     g1:"Vice city",
//     g2:"Contra",
//     g3:"snake"
// }


// Not work on objects
// for (const [key,value] of games) {
//     console.log(key)
// }



// for (const key in games) {
//     console.log(key+"--->"+games[key])
// }




// for( const key in hero){
//     console.log(key+"----->"+hero[key])
// }





// hero.forEach(function (name){
//     console.log(name)
// });

// In Arrow functionn
// hero.forEach((name)=>{
//     console.log(name)
// });


// function printme(item,index,arr){
//     console.log(item,index,arr)
// }

// hero.forEach(printme)






// const mylang=[
//     {name:"Hindi",country:"India"},
//     {name:"english",country:"UK"},
//     {name:"german",country:"germany"}]


// mylang.forEach((item)=>{
// console.log(item)
// console.log(item["name"],item["country"])
// })




// const values=hero.forEach((item)=>{
//     // console.log(item)
//     return
// })

// console.log(values)



// const mynum=[1,2,3,4,5,6,7,8,9,10]



// const new_nums=mynum.filter((num)=>num>4)


// const new_nums=mynum.filter((num)=>{
//     return num>4
// })





// const new_num=[]

// mynum.forEach((num)=>{
//     if (num>4){
//         new_num.push(num)
//     }})


// console.log(new_num)

// const books=[
// {
//     bookName: "The Great Gatsby",
//     bookEdition: "First Edition",
//     yearOfPublication: 1925,
//     price: 15.99
// },
// {
//     bookName: "To Kill a Mockingbird",
//     bookEdition: "50th Anniversary Edition",
//     yearOfPublication: 1960,
//     price: 12.50
//   },
// {
//     bookName: "The Catcher in the Rye",
//     bookEdition: "Revised Edition",
//     yearOfPublication: 1951,
//     price: 14.75
// }
// ];



// // console.log(books)


// const bookNames = books.filter((book) => {
//     if (book.yearOfPublication>=1950 || book.price>13)
//     {
//         return book
//     }
//   });

// console.log(bookNames)




// const mynum=[1,2,3,4,5,6,7,8,9,10]

// const sum_10=mynum.map((num)=>{
//     return num+10
// })





//chaining

// const new_num=mynum
//               .map((num)=>num*10)
//               .map((num)=>(num*10))
//               .filter((num)=>(num>700))



// console.log(new_num)

const mynum=[1,2,3]

initialvalue=0
// const wum=mynum.reduce(
//     (accumulator,currentvalue)=>accumulator+currentvalue,initialvalue
// );


// const wum=mynum.reduce(function(accumulator,currentvalue){ return accumulator+currentvalue}
//     ,initialvalue);

// the initialvlaue is pass for the acumalotr for first time 
// currentvalue is each vale through loop
//accumulator==initialvalue // for intiliaization

// const wum=mynum.reduce((accumulator,currentvalue)=>(accumulator+currentvalue),initialvalue);
// console.log(wum)


let cart=[{
    item:1,
    price:200
},{
    item:2,
    price:200
},{
    item:3,
    price:200
}]



const total_sum=cart.reduce((accumulator,currentvalue)=>(accumulator+currentvalue.price),0);
console.log(total_sum)














