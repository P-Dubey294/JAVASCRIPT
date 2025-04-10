// Promise.race()---> jo phle promised aya executed hua uske badd ke promised 
// executed nh hong its means winning . including che fir vo fullfiled ho jaaye
// ya fir rejected ho jaaye koi frak nh pdta hai 



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
 Promise.race([api1(),api2(),api3()])  // all the promised will be returnn into a single array
    .then((data) => {
    console.log(data);     // promise consumed
 }) 
   .catch(err => {
    console.log(err);      // error handling 
   })