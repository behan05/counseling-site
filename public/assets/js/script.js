document.addEventListener("DOMContentLoaded", () => {
    const likeIcons = document.querySelectorAll(".heart-icon");
    const likeCounts = document.querySelectorAll(".like-count");

    likeIcons.forEach((icon, index) => {
        icon.addEventListener("click", () => {
            let initialVal = parseInt(likeCounts[index].textContent);

            if (icon.classList.contains("liked")) {
                icon.classList.remove("liked");
                initialVal--;
            } else {
                icon.classList.add("liked");
                initialVal++;
            }

            if (isNaN(initialVal)) {
                likeCounts[index].textContent = 1;
            } else {
                likeCounts[index].textContent = initialVal;
            }
        });
    });
});
