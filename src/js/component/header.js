

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".container__menuBtn");
    const closeBtn = document.querySelector(".container__closeBtn");
    const container__menu = document.querySelector(".container__menu");

    try {
        if (menuBtn && closeBtn && container__menu) {

            menuBtn.addEventListener('click', () => {
                container__menu.style.display = "block";
                menuBtn.style.display = "none";
                closeBtn.style.display = "block";
            })
            closeBtn.addEventListener("click", () => {
                container__menu.style.display = "none";
                menuBtn.style.display = "block";
                closeBtn.style.display = "none";
            })
        }
    } catch (error) {
        console.log(error.message);
    }


})

