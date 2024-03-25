document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const slideWidth = 100; // 100% of the slider's width

    function showSlide(index) {
        if (index >= totalSlides) {
            slideIndex = 0; // Restart from the beginning
        } else if (index < 0) {
            slideIndex = totalSlides - 1; // Go to the last slide
        }
        const translateXValue = -slideIndex * slideWidth;
        slider.style.transform = `translateX(${translateXValue}%)`;
    }

    prevBtn.addEventListener("click", () => {
        showSlide(--slideIndex);
    });

    nextBtn.addEventListener("click", () => {
        showSlide(++slideIndex);
    });

    setInterval(() => {
        showSlide(++slideIndex);
    }, 5000);
});
