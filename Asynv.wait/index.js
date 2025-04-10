// async function ?
// provide a cleaner style & promise chaning krne se bch skte hai 
// ye ek promise object return krta hai 
// NOTE THAT without async you cannot await used
// jb promise involved hongaa jb hi asyc wait chlegaaa (work kregaa).


// function fun2() {;
//     return new Promise(function (res,rej){
//     res("hello")
//     })
// }
// fun2().then((data) => {
//     console.log(data);
// })

// OR


// function pro() {
//     return new Promise(function pro1(res, rej){
//     setTimeout(() => {
//         res("hello")
//     },3000);   
//     });
// }
//  async function fun1(){ 
//     console.log("start");
//     let x = await pro();  //await vhi lgyayege jha time taking task hai jo feuture me complete honga
//     console.log("Promise resolved");
//     return x; 
//     // return "data"  
// }
// let y = fun1();
// console.log("end1");

// for(let i = 0; i<100000000; i++) {

// }
// console.log("end2");

// fun1().then((data) => {
//     console.log(data);
// });


async function SerchFood(item) {
    return new Promise(function fun1 (res, rej){
        console.log("Serching start for",item,"...");
        setTimeout(function timer1(){
            let data = `list of ${item}`;
            res({item, data})
        },3000)
    });
}

async function Oderfood(item) {
    return new Promise(function fun2 (res, rej){
        console.log("select item",item);
        setTimeout(function timer2(){
            let id = Math.floor(Math.random() * 999999);
            console.log(`Order Created Succcesfully with id no`, id);
            res({id, item});
        },4000)
    })
}

async function Payment(item, id) {
    return new Promise (function fun3(res, rej){
         console.log(`Payment Start For ${item} with id no.`,id);
            setTimeout(function timer3() {
            let status = true;
            res(status);
        },6000)
    });
}

async function FoodOdering(item) {
    let res1 = await SerchFood(item)
    let res2 = await Oderfood(res1.item)
    let res3 = await Payment(res2.item , res2.id)
    return res3
}
FoodOdering("kadai Panir").then((status) => {
    console.log("Payment Sucessfully with Status",status)
});