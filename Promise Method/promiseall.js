// function api1() {
//     return new Promise ((res,rej) => {
//         setTimeout(() => {
//             res("api1")
//         },2000)

//     })
// }
// function api2() {
//     return new Promise ((res,rej) => {
//         setTimeout(() => {
//             res("api2")
//         },3000)
//     })
// }
// function api3() {
//     return new Promise ((res,rej) => {
//         setTimeout(() => {
//             res("api3")   
//         },4000);
//     })
// }
// api1().then((Data1) => {
//     console.log(Data1);
// })
// api2().then((Data2) => {
//     console.log(Data2);
// })
// api3().then((Data3) => {
//     console.log(Data3);
// })

//**  Promise.all() ----> ye ek array leta hai (iterable) and return a single promised ***//
//    ye Parallely Execute hoti hain. jb humare promise reolved ya full filed honga tb hi execute honga
//    ye input mein ek array of promises bhi leta hain .

function api1() {
    return new Promise ((res,rej) => {
        setTimeout(() => {
            res("api1")
        },2000)

    });
}
function api2() {
    return new Promise ((res,rej) => {
        setTimeout(() => {
            res("api2")
        },3000)
    });
}
function api3() {
    return new Promise ((res,rej) => {
        setTimeout(() => {
           rej("Promise Rejected")   // promised  rejected
        },7000);
    });
}
 Promise.all([api1(),api2(),api3()])  // all the promised will be returnn into a single array
    .then((data) => {
    console.log(data);     // promise consumed
 }) 
   .catch(err => {
    console.log(err);      // error handling 
   })
  



// NOTE promise.all ke ek ddisadvantage ye hai ki ek bhi promised reject hua tho 
// vo sabhi ko rejected kr denga.


