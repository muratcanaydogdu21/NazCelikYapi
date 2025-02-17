let currentSlide = 0;

// Slaytları kontrol eden fonksiyon
function updateSlide() {
    const slides = document.querySelector('.slides');
    const offset = -currentSlide * 100; // Her slayt genişliği %100
    slides.style.transform = `translateX(${offset}%)`;
}

// Bir önceki slayta geçiş
function prevSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
}

// Bir sonraki slayta geçiş
function nextSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
}


let currentImage = 0;

// Slider'daki görüntüleri güncelle
function updateImage() {
    const images = document.querySelector('.images');
    const totalImages = document.querySelectorAll('.images img').length;
    const offset = -currentImage * 100; // Her resim genişliği %100
    images.style.transform = `translateX(${offset}%)`;
}

// Bir önceki resme geçiş
function prevImage() {
    const totalImages = document.querySelectorAll('.images img').length;
    currentImage = (currentImage - 1 + totalImages) % totalImages;
    updateImage();
}



// Tüm kutuları seç
const boxes = document.querySelectorAll('.box');
let currentIndex = 0;

// Her 6 saniyede bir aktif kutuyu değiştir
setInterval(() => {
  // Aktif kutunun sınıfını kaldır
  boxes[currentIndex].classList.remove('active');
  
  // Sonraki kutuya geç (son kutudan sonra başa dön)
  currentIndex = (currentIndex + 1) % boxes.length;
  
  // Yeni aktif kutuyu belirle
  boxes[currentIndex].classList.add('active');
}, 6000);


// Bir sonraki resme geçiş
function nextImage() {
    const totalImages = document.querySelectorAll('.images img').length;
    currentImage = (currentImage + 1) % totalImages;
    updateImage();
}




document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            // Eğer zaten genişlemişse küçült
            if (card.classList.contains("expanded")) {
                card.classList.remove("expanded");
            } else {
                // Önce tüm kartları kapat
                cards.forEach(c => c.classList.remove("expanded"));
                // Seçili kartı genişlet
                card.classList.add("expanded");
            }
        });
    });
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












const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }
        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });
    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }
    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }
    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);


//başlık arkasındakı slide show için







document.querySelectorAll(".toggle-btn").forEach(button => {
    button.addEventListener("click", function() {
        const moreInfo = this.nextElementSibling;
        if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
            moreInfo.style.display = "block";
            this.textContent = "Kapat";
        } else {
            moreInfo.style.display = "none";
            this.textContent = "Devamı";
        }
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
