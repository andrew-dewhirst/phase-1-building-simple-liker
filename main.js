// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', event => {
  let hearts = document.getElementsByClassName("like-glyph")
  for (heart of hearts) {
  heart.addEventListener('click', likeHearts)
  }
})

function likeHearts(event) {
  mimicServerCall()
    .then(() => {
      let e = event.target;
      if (e.textContent == EMPTY_HEART) {
        e.classList.add('activated-heart');
        e.textContent = FULL_HEART;
      } else if (e.textContent == FULL_HEART) {
        e.classList.remove('activated-heart');
        e.textContent = EMPTY_HEART;
      }
    })
    .catch(error => {
      document.querySelector('#modal').classList.remove('hidden');
      document.querySelector('#modal').textContent = `${error}`;
      setTimeout(function(){ document.querySelector('#modal').classList.add('hidden')}, 3000);
  })
}





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
