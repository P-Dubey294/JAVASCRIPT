// console.log("heelo ")

// const heading = document.getElementById('heading')
// heading.innerText  = "from Js File"
// console.log(heading.innerText);

// const heading = document.getElementsByTagName('h1')
// heading.innerText  = "from Js File"
// console.log(heading)

// const heading = document.getElementsByClassName("heelo")
// heading[0].innerHTML  = "<s>heelo</s>"
// console.log(heading[0].innerText)

// const heading = document.querySelector("h1")

// heading.style.backgroundColor = "red"
// heading.style.border = "1px solid black"
// heading.style.borderRadius = "10px"
// console.log(heading)

// heading.setAttribute("class", "heelo heelo3")
// heading.setAttribute("style","background-color : orange")
// heading.removeAttribute("id")

// const newTag = document.createElement("p")
// newTag.setAttribute("id","Pratham")
// newTag.innerText= "Hello Pratham Dubey how are you!" ;
// // document.append(newTag)

// const body = document.getElementById("body")
// body.appendChild(newTag)
// console.log(newTag);

let data = ["monitor","keybord","mouse","printer","CPU"]

const ul =document.getElementById("spcs");
// const liTag = document.createElement('li')
// liTag.innerText = "laptop"
// ul.append(liTag)

for(let i=0; i<data.length; i++){
    // console.log(data[i])
     const liTag = document.createElement('li')
     liTag.innerText = data[i];
     liTag.style.backgroundColor = 'yellow';
     liTag.style.margin = '3px';
     liTag.style.padding = '5px';
     liTag.style.borderRadius = '20px';
     liTag.style.width = '80px';
     liTag.style.paddingRight = "70px";
     liTag.style.textAlign = "center";
     ul.append(liTag);
}


    