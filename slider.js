var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


function openSidebar() {
    document.getElementById("sidebarMenu").classList.add("active");
    document.getElementById("sidebarOpen").style.display = "none";  // Menü butonu gizlenir
}

function closeSidebar() {
    document.getElementById("sidebarMenu").classList.remove("active");
    document.getElementById("sidebarOpen").style.display = "block";  // Menü butonu geri gelir
}


document.addEventListener("DOMContentLoaded", function() {
    let scrollTopBtn = document.getElementById("scrollTopBtn");

    // Kullanıcı aşağı kaydırdığında butonu göster
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {  // 300px aşağı kayınca buton görünür
            scrollTopBtn.style.display = "flex";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    // Butona basınca en üste kaydır
    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});






document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".slideshow img");
    let currentIndex = 0;
    const intervalTime = 3000; // 3 saniyede bir değişim

    function changeImage() {
        images[currentIndex].style.opacity = 0; // Mevcut resmi gizle
        currentIndex = (currentIndex + 1) % images.length; // Sonraki resme geç
        images[currentIndex].style.opacity = 1; // Yeni resmi göster
    }

    setInterval(changeImage, intervalTime);
});










//kartlar için 



function toggleCard(card) {
    let text = card.querySelector(".card-text");

    if (card.classList.contains("active")) {
        card.classList.remove("active");
        text.style.opacity = "0";
    } else {
        document.querySelectorAll(".card").forEach(c => {
            c.classList.remove("active");
            c.querySelector(".card-text").style.opacity = "0";
        });

        card.classList.add("active");
        text.style.opacity = "1";
    }
}
