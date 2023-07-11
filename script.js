// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
let scrollcontainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollcontainer.addEventListener("wheel" , (evt) => {
  evt.preventDefault();
  scrollcontainer.scrollLeft += evt.deltaY;
  scrollcontainer.style.scrollBehavior="auto";
});

nextBtn.addEventListener("click" , () => {
  scrollcontainer.style.scrollBehavior="smooth";
  scrollcontainer.scrollLeft += 900;
});

backBtn.addEventListener("click" , () => {
  scrollcontainer.style.scrollBehavior="smooth";
  scrollcontainer.scrollLeft -= 900;
});



const count = document.getElementById("count");

incrementVisitsCount();

function incrementVisitsCount() {
    let visits;

    if (!localStorage.getItem("visits")) localStorage.setItem("visits", 1);
    else {
        visits = +localStorage.getItem("visits");
        const incrementedCount = visits + 1;

        localStorage.setItem("visits", incrementedCount);
    }

    count.innerText = localStorage.getItem("visits");
}
