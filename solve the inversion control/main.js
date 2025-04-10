// let p = new Promise(function (res , rej) {
//     res("Promise Resolved")
// });
// console.log(p)
// p.then((data) => {
//     console.log(data)
// })

// function SerchFood(item , cb1) {
//     console.log("Serching food for " , item , "....")
//     setTimeout(function timer1 () {
//         let data = `list of ${item}`;
//         cb1(item,data); // callback function 
//     },3000);
// }
// SerchFood("chole chawal" , function (item , data){
//     console.log(item)
//     console.log(data)
// })

// Convert Promise  // wirhout call back function 

function SerchFood (item) {
     return new Promise ( function fun1 (res , rej) {
         console.log("Serching food for " , item , "....")
             setTimeout(function timer1 () {
             let data = `list of ${item}`;
             res ({data,item});  // Function   // yha pr mromise settle hp gya mtlb humara prmoside ya tho full filled honga yah fir rejected ho but duplicacy allowed nh krega ..! 
        },3000);
     });
}
function OderFood (item) {
    return new Promise (function fun2(res ,rej) {    
        console.log("Select" ,item)
        setTimeout (timer2 => {
            let id = Math.floor((Math.random() * 99999)); // oderi d ko isme humne genrate kraa rhe hai 
            res(id)
        },4000)
    });
} 
function OrderPayment (item, id) {
    return new Promise(function fun3(res, rej){
            console.log(`Payment Start For ${item} with id no. ${id}`);
            setTimeout(timer3 => {
             let status = true;
             res(status)
            },6000);
    })
}

/////// PROMISED HELLL //////////////

let result = SerchFood("Burger").then(function consume2(item){
         console.log(item.data);
         OderFood(item.item).then(function consume2(id){
         console.log("Order Created Succesfully! ID No:", id);
         OrderPayment(item.item , id).then(function consume3(status){
         console.log("Payment Sucesfully with status", status);
         })
    })
})






