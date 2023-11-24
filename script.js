document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;

    function showProduct(index) {
        const productWidth = document.querySelector('.product').offsetWidth;
        carousel.style.transform = `translateX(-${index * productWidth}px)`;
    }

    function nextProduct() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        showProduct(currentIndex);
    }

    function prevProduct() {
        currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
        showProduct(currentIndex);
    }

    nextBtn.addEventListener('click', nextProduct);
    prevBtn.addEventListener('click', prevProduct);

    
    setInterval(nextProduct, 3000);
});
