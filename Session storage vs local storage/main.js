// web storage APi 

// a> session storage   
// b> Local storage

// browser provdie web api 

// session storage hoti kha pr hain-
// --> browser open ---> right click ---> inspect
//  ---> application >> show both storage


// session --> (period of time ) / Perticular time .
// session storage -> ek perticular time pr data ko store krwana.

// what is sesion storage and local storage ? 

// sesion storage means jb  bhi koi data ko store kraa rhe hain and baad me usko web-broser se totally
// remove krege tho data bhi renove ho jatega. 

// iska hi oppsite local storge hota hai 


/*****Sesion and local storage ka input  vo ek String hota hai*****/

// LOCAL STORAGE ....
// local storge me data ko jb aap store krate hai tho vaps aane ke baad bhi data visa ka visa hi rheta hain 
// document.getElementById('btn').addEventListener('click' , () => {
//     localStorage.clear("store" , "orange")
// })

// SESION STORAGE....
// sesion storage me data jb app store krwate hain tho vaps aane ke baad data change ho jata hai / fir refresh kre us data ko fir se stroe krwata hain
// document.getElementById('btn').addEventListener('click' ,  () => {
//     sessionStorage.setItem("store" , "Shruti")
// })


// There are 4 tyoes of method involve 
// 1> setItem
// 2> getItem
// 3> clear
// 4> removeItem

            document.getElementById('btn').addEventListener("click" ,  (e) => {

                let name = document.getElementById('name').value 
                let Rollno = document.getElementById('Rollno').value



                localStorage.setItem('data', JSON.stringify({name : name , Rollno : Rollno }));
                // document.getElementById('h1').innerText = localStorage.getItem('data')
                document.getElementById('h2').innerText = JSON.parse(localStorage.getItem('data')).name
                document.getElementById('h1').innerText = JSON.parse(localStorage.getItem('data')).Rollno /// loca lstorge ki help se data remove nh hongaa chaae fir app apne 
                                                                                                          // browser ko closed krke open kre data as it is rhegaa hi . 
            });
            // document.getElementById('h1').innerText = localStorage.getItem('data');
            document.getElementById('h2').innerText = JSON.parse(localStorage.getItem('data')).name
            document.getElementById('h1').innerText = JSON.parse(localStorage.getItem('data')).Rollno

            // console.log(typeof JSON.stringify({name:"Pratham", rollNO: "2324MIFMCA042"}));
            console.log(typeof JSON.parse(localStorage.getItem('data')));

                /****JAVASCRIPT OBJECT NOTATION  */
                //->JASON.parse()
                //->JASON.stringfy()

// JASON.Stringfy() -->  muze need thi ki ye {name :"Pratham", rollNO: "2324MIFMCA042"} perticular ko 
// muze strimng me send krna hain./ ya muze kis object ko string me convert krna hain  iske 
// liye JASON.Stringfy() ka use krte hain .

// JASON.Stringfy () ==> Object ARRAY to --> stringyfy


// JASON.Parse()--> ye string ko object me convert kregaaa .///
//name :"Pratham", rollNO: "2324MIFMCA042"} perticular ko 
// muze object me send krna hain./ ya muze kis string ko object me convert krna hain  iske 
// so in this time we have used JASON.Parse().

// JASON.Parse() ==> string ----> object array()