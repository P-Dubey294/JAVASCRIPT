 SerchfOOD = ((item , cb1) => {
    console.log("Serchning Sart for", item ,"......");
    setTimeout(timer1  => {
    let data = `list of  ${item}`;
    cb1(item , data);  // return kraa rha item ko bhi and uske under ka data bhi 
    },3000);


    // oder krena or ek order id genrate krana ... 

    orderfood = ((item, cb2) => {
        console.log("Select" ,item)
        setTimeout (timer2 => {
            let id = Math.floor((Math.random() * 99999)); // oderi d ko isme humne genrate kraa rhe hai 
            cb2(id);
        },4000)
    })

    // payment 

    payment = ((item , id , cb3 ) => {
       console.log(`Payment Start For ${item} with id no. ${id}`);
       setTimeout(timer3 => {
        let status = true;
        cb3(status);
       },6000);
    })
     // Call Back hell and inversion 
    // Data ko returnn krne ke liye call back function ka use kiye gya hai isme 
})
let group = SerchfOOD("burger" , fun1 = ((item, data) => {  // or data and item dono yha pr recive ho rha hai 
    console.log(data);
    orderfood(item , fun2 = ((Oderid) => {
        console.log("Order Created Succesfully! ID No:", Oderid);
        payment (item, Oderid, fun3 = ((response) => {
            console.log("Payment Sucesfully with status", response);
        }));
    }));
}));

