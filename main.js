// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'




var liker = document.getElementsByClassName("like-glyph")

console.log (liker)
function likeCallBack(event){
  const heart = event.target
mimicServerCall("url.com")
.then((response)=> {
  if(heart.innerText == EMPTY_HEART){
    heart.innerText = FULL_HEART
heart.className = "activated-heart"
  }
else {
  heart.innerText = EMPTY_HEART
heart.className = ""
}
})
.catch((error)=>{
  document.getElementById("modal").className = ""
  document.getElementById("modal").innerText = error
  setTimeout(()=>document.getElementById("modal").className = "hidden", 3000)
})
}
for (let i = 0; i < liker.length; i++){
  liker[i].addEventListener("click", likeCallBack)
}  


//
// mimicServerCall("url.com")
//   .then((response) => ({
//     document.GetElementsByClassName("like-glyph")})
//   .catch((err)=>{document.getElementById("modal").classList.remove("hidden")})
  

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
