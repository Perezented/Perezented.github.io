window.addEventListener("load", () => {
    document.querySelectorAll("div").forEach((value, i, array) => {
        {
            array[i].classList.add("newTextAnimation");
            array[0].classList.remove("newTextAnimation");
            array[1].classList.remove("newTextAnimation");
        }
    });
});

window.addEventListener("scroll", () => {
    const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    document.querySelectorAll("div").forEach((value, i, array) => {
        const topValueY = array[i].getBoundingClientRect().y;
        if (topValueY <= scrolled / 0.3) {
            array[i].classList.add("appear");
            array[i].classList.remove("newTextAnimation");
        }
    });
    document.querySelectorAll("section").forEach((value, i, array) => {
        const topValueY = array[i].getBoundingClientRect().y;
        if (topValueY <= scrolled / 0.3) {
            array[i].classList.add("appear");
            array[i].classList.remove("newTextAnimation");
        }
    });
});
