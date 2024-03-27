document.addEventListener("DOMContentLoaded", () => {
    const heartIcon = document.querySelector(".heart-icon");
    const likeCount = document.querySelector(".like-count");

    let initialVal = 0;

    if (heartIcon && likeCount) {
        heartIcon.addEventListener("click", () => {
            if (heartIcon.style.color !== "red") {
                heartIcon.style.color = "red";
                initialVal++;
            } else {
                heartIcon.style.color = "white";
                initialVal--;
            }
            likeCount.textContent = initialVal;
        });
    }
});