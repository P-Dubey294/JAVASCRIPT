let emoji = document.getElementById('emoji');
let nameEmoji = document.getElementById('nameEmoji');

let result

async function fetchEmoji() {
     let res = await fetch('https://emoji-api.com/emojis?access_key=aee2b41ad707b4fa63844cc63baa0fe541478231');
     result = await res.json();
     console.log(result[0]);
    
}
fetchEmoji();

emoji.addEventListener('click', () => {
    let randum = Math.floor(Math.random() * result.length)
    let description = result[randum].unicodeName.split('.')
    let des2 = description[1].substring(2,description[1].length);
    emoji.innerHTML = result[randum].character
    nameEmoji.innerHTML = des2;

})