// ==========================
// Tahseen Portfolio Script
// ==========================

// Fade animation when page loads
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Smooth scroll for Explore Courses button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Button click animation
document.querySelectorAll(".buttons a").forEach(button => {

    button.addEventListener("mousedown", () => {
        button.style.transform = "scale(0.96)";
    });

    button.addEventListener("mouseup", () => {
        button.style.transform = "";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "";
    });

});

// Floating profile effect
const profile = document.querySelector(".profile");

if(profile){

let direction = 1;

setInterval(()=>{

profile.style.transform=`translateY(${direction*4}px)`;

direction*=-1;

},1800);

}
/* =======================================
   GALLERY LIGHTBOX
======================================= */

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("show");
        lightboxImg.src = img.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("show");

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.remove("show");

    }

});
