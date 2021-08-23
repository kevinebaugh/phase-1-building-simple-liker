// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function commenceLikeOrUnlike(e) {
  mimicServerCall().then((res) => {
    const alreadyLiked = e.target.classList.contains("activated-heart")
    if (alreadyLiked == true) {
      e.target.classList.remove("activated-heart")
      e.target.innerText = EMPTY_HEART
    } else {
      e.target.classList.add("activated-heart")
      e.target.innerText = FULL_HEART
    }

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

likeRegions.forEach(likeRegion => {
  likeRegion.addEventListener("click", commenceLikeOrUnlike)
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
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
