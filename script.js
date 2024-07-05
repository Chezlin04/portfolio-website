// B.T.T BTN
// Get the button
let backToTopBtn = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        backToTopBtn.style.display = "block";
    }
    else{
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.onclick = function(){
    scrollToTop();
}

function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
}

// Modal
var modal = document.getElementById("imgModal");

// Insert Img into modal/Use alt text as caption
var modalImg = document.getElementById("modImg");
var captionText = document.getElementById("caption");

// Get all images and insert them inside the modal
var imgs = document.querySelectorAll(".thumbnail");
imgs.forEach(image => {
    image.addEventListener("click", function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});
// Get <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span>(x), close modal
span.onclick = function(){
    modal.style.display = "none";
}

// Contact Form
document.getElementById("conForm").addEventListener("submit", function(event){
    var form = this;
    var checkboxes = form.querySelectorAll("input[type='checkbox'");
    var isChecked = Array.prototype.slice.call(checkboxes).some(x => x.checked);
    
    if(!isChecked){
        alert('Please select at least one option for "What are you looking for?"');
        event.preventDefault();
    }    
});
