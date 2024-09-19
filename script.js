const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
  fetch("https://official-joke-api.appspot.com/random_joke")
  .then(data=>data.json())
  .then(result =>{
    // console.log(result)
    jokeContainer.innerHTML = `${result.setup} <br>  Punchline: ${result.punchline}😂`;
  });
  
  });
 
