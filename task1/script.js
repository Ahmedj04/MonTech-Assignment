$(document).ready(function () {
    var currentIndex = 0;
    var items = $('.carousel-item');
    var totalItems = items.length;

    updateButtons(); // Initially update button visibility

    $('.carousel-next').click(next);
    $('.carousel-prev').click(prev);

    function updateButtons() {
        $('.carousel-prev').toggle(currentIndex > 0); // Show/hide Previous button
        $('.carousel-next').toggle(currentIndex < totalItems - 3); // Show/hide Next button
    }

    function next() {
        if (currentIndex < totalItems - 3) {
            currentIndex++;
            updateCarousel();
            updateButtons();
        }
    }

    function prev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
            updateButtons();
        }
    }

    function updateCarousel() {
        var translateValue = -currentIndex * (100 / 3) + '%';
        $('.carousel-inner').css('transform', 'translateX(' + translateValue + ')');
    }


});
