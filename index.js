
let bagCount = document.getElementById("bag-count")
let error = document.getElementById("error")
let errorMesssage = "Something went wrong. Please try again!"
let sucessBag = "Successfully added to bag!"

count = 0

function increment () {
    count += 1
    bagCount.textContent = count
}

function purchase () {
    error.textContent = errorMesssage
}

function bagSuccess () {
    error.textContent = sucessBag
}

var modal = document.querySelectorAll("myModal")

var btn = document.querySelectorAll(".purchase-now-button");

btn.forEach((btn, index) => {
  btn.addEventListener("click", function() {
      modal[index].style.display = "block";
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// when the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
