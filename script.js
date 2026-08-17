console.log(document.getElementById("openInvitation"));

document.addEventListener("DOMContentLoaded",()=>{


// ELEMENTS

const openingScreen = document.getElementById("opening-screen");
const openInvitation = document.getElementById("openInvitation");

const navbar = document.getElementById("navbar");


// OPEN INVITATION

if(openInvitation){

    openInvitation.addEventListener("click",()=>{


        if(openingScreen){

            openingScreen.classList.add("hide");

        }


        if(navbar){

            navbar.classList.add("show");

            const hero = document.querySelector(".hero");

      if(hero){

    hero.classList.add("show");

}
        }

    });

}

});

const eventDate = new Date("August 30, 2026 10:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance <= 0) return;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}, 1000);

// =======================
// GALLERY LIGHTBOX
// =======================

const images = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const closeBtn = document.getElementById("close");

images.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImage.src=image.src;

});

});

closeBtn.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});

// =========================
// FLOWER PETALS
// =========================

const petalsContainer = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * window.innerWidth + "px";

    petal.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    petal.style.fontSize =
        (18 + Math.random() * 18) + "px";

    petalsContainer.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    },11000);

}

setInterval(createPetal,500);

const reveals = document.querySelectorAll(".reveal");


window.addEventListener("scroll",()=>{


    reveals.forEach(section=>{


        const windowHeight = window.innerHeight;

        const top = section.getBoundingClientRect().top;


        if(top < windowHeight - 100){

            section.classList.add("show");

        }


    });


});

// SMART NAVBAR

const navbar = document.getElementById("navbar");

let lastScroll = 0;


window.addEventListener("scroll",()=>{


    let currentScroll = window.scrollY;


    if(currentScroll > lastScroll && currentScroll > 150){

        // scrolling down
        navbar.classList.add("hide");

    }
    else{

        // scrolling up
        navbar.classList.remove("hide");

    }


    lastScroll = currentScroll;


});
// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if(menuBtn && navLinks){

    // Open / close menu
    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });


    // Close menu and go directly to section
    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

        });

    });

}

/// RSVP EMAIL

const sendRSVP = document.getElementById("sendRSVP");


if(sendRSVP){

    sendRSVP.onclick = function(){


        let name = document.getElementById("guestName").value;

        let attendance = document.getElementById("attendance").value;

        let guests = document.getElementById("guestCount").value;


        if(name === "" || attendance === "" || guests === ""){

            alert("Please complete the RSVP form.");

            return;

        }


        let email = "gersed.marababol03@gmail.com";


        let subject = "Christening RSVP";


        let body =
        "Name: " + name +
        "\nAttendance: " + attendance +
        "\nNumber of Guests: " + guests;


      window.open(
"https://mail.google.com/mail/?view=cm&fs=1&to="
+ email
+ "&su="
+ encodeURIComponent(subject)
+ "&body="
+ encodeURIComponent(body)
);

    };

}