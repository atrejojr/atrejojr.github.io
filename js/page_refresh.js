let flkty;

document.addEventListener('DOMContentLoaded', function () {
  // Initialize Flickity
  const carouselElement = document.querySelector('#project-1-modal-carousel');
  if (carouselElement) {
    flkty = new Flickity(carouselElement, {
      cellAlign: 'center',
      contain: true,
      wrapAround: true
    });

    // Resize Flickity after video metadata is loaded
    const video = carouselElement.querySelector('video');
    if (video) {
      video.addEventListener('loadedmetadata', function () {
        flkty.resize();
      });
    }
  }

  // Modal logic for Bulma
  const modal = document.getElementById('project-1-modal');
  const openBtn = document.getElementById('open-project-1');
  const closeBtn = modal.querySelector('.delete');
  const closeFooterBtn = modal.querySelector('.modal-card-foot .button');

  if (openBtn && modal) {
    openBtn.addEventListener('click', function () {
      modal.classList.add('is-active');

      // Trigger Flickity layout fix AFTER modal becomes visible
      setTimeout(() => {
        if (flkty) flkty.resize();
      }, 100); // small delay for visibility
    });
  }

  // Close modal with header button
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      modal.classList.remove('is-active');
    });
  }

  // Close modal with footer button
  if (closeFooterBtn) {
    closeFooterBtn.addEventListener('click', function () {
      modal.classList.remove('is-active');
    });
  }
});