//********* Error is made by a combination of 2 things ******************************* */
// 1> Error Meassage
// 2> Error type 
try {
   console.log(num);
}
catch (err) {
    console.log(err.message);
    console.log(err.type);
}


// ******************Antoher Example ****************/

function SearchFood(item) {
    return new Promise(function fun1 (resolve,rejeted) {
        console.log("Searching start for",item, "..........");
        setTimeout(timer1 => {
            let data = `list of item ${item}`;
            if(data){
                resolve({item , data})
            }
            else{
                rejeted(new Error('list is empty')) // Error constructor  idhr errorr aayegi jb let data = null krege to 
            }

        },3000)
    })
}

function OrderFood(item){
    return new Promise(function fun2(resolve , rejeted) {
        console.log("Seletecd of",item);
        setTimeout(timer2 => {
            let id = Math.floor(Math.random() * 99999);
            resolve({id,item});
        },4000);
    })
}
function Payment(item,id){
    return new Promise(function fun3(resolve,rejeted) {
        console.log(`Payment starting for ${item} with id no`, id);
        setTimeout(function timer3 () {
            let status = true;
            resolve(status);
        },6000)
    })
}
let result = SearchFood ("BURGER")
     .then(function consume1 (details1) {
        console.log(details1.data);
        return OrderFood(details1.item)
     })

     .then(function consume2 (details2) {
        console.log("Order Created Succesfully with id no",details2.id);
        return Payment(details2.item, details2.id)
     })
     
     .then(function consume3 (status) {
        console.log("Payment succesfully with status",status);

     }).catch(function rejeted(err){              // handle the errors 
        console.log(err);
     })
     .finally(function execute() {
        console.log("always Executed");           // awlays execute hoga ise ghnta koi frk nh pdta ki promise either full or rejeted (settled)
     })

