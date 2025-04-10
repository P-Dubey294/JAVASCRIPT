// Promise.any() ---> agar se koi promised rejeted milta hai tho 
// promise.any() metgod use ingnore krke agge ka executed kregaa jo sabse phle
// executed hongaa usko depends on


// Note if all the promised is rejeted then it return Aggregate error with array 
// of reasons.

function api1() {
    return new Promise ((res,rej) => {
        setTimeout(() => {
            rej("api1")
        },2000)

    });
}
function api2() {
    return new Promise ((res,rej) => {
        setTimeout(() => {
            rej("api2")
        },3000)
    });
}
function api3() {
    return new Promise ((res,rej) => {
        setTimeout(() => {
           rej("api3")   // promised  rejected
        },1000);
    });
}
 Promise.any([api1(),api2(),api3()])  // all the promised will be returnn into a single array
    .then((data) => {
    console.log(data);     // promise consumed
 }) 
   .catch(err => {
    console.log(err);      // error handling 
   })