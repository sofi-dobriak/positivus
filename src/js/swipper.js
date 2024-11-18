const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  watchOverflow: false,

  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },

  pagination: {
    el: '.pagination',
    bulletClass: 'pagination-button',
    bulletActiveClass: 'active',
    renderBullet: function (index, className) {
      return `
        <button class="${className}" type="button" aria-label="Go to slide ${
        index + 1
      }">
          <svg class="pagination-icon" width="14" height="14">
            <use href="./img/icons.svg#icon-slider"></use>
          </svg>
        </button>`;
    },
  },
});
