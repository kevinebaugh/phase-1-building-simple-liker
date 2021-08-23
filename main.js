// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function commenceLike(e) {
  mimicServerCall().then((res) => {
    console.log("Success!")
    e.target.classList.add("activated-heart")
  }).catch((err) => {
    console.error(err)
    const errDiv = document.querySelector("#modal")
    errDiv.classList.remove("hidden")
    setTimeout(function() {
      errDiv.classList.add("hidden")
    }, 3000)
  })
}

const likeRegions = document.querySelectorAll(".like")

likeRegions.forEach( likeRegion => {
  likeRegion.addEventListener("click", commenceLike)
})


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
