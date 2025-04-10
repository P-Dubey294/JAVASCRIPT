// Ftech is a keyword .
// clients server model -->
// clients ----reuest-----> server 
// client <----response ----- server.

// what is fetch api 
// sometime i fetch the the some data into my js file
// then js file (client) send the request to the server
// the server send the reponse to the clients. so that time the 
// Fetch api i used . 


//** Fetch Api are return the Promise object*****//
//** muze javascript meain kisi perticular url se data ko fetch krna hai so iss time pr
// fetch api ka use krungaaa. 

// async function api () {
//     let response = await fetch("https://api.github.com/users/P-Dubey294")//.then((data) => {
//         // return data.json() // response 
//    // })
//       let result = await response.json(); // return Promise { <pending> }
//     console.log(result);
// }
// api();

//.jason ki help lagti hai data ko parse krne ke liye 
// javascript object notation


// **** Fetch api also with Error handling **** //// 






async function api(num1 , num2)
{
            try { 
                  let response = await fetch(
                        `https://apicodethread.cyclic.app/sum?a=${num1}&b=${num2}`
                  );
                  // let response = await fetch("https://api.github.com/users/P-Dubey294")
                  let result = await response.json();
                  document.getElementById("total").innerHTML = result.sum
              }
             catch (err) 
             {
                   console.log(err);
             }
}
// api();
document.getElementById("btn").addEventListener('click', () => {
      let num1 = document.getElementById("num1").value
      let num2 = document.getElementById("num2").value
      api(num1 , num2)
});


