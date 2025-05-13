let flkty;

document.addEventListener('DOMContentLoaded', function () {
  // Initialize Flickity only for the Snake Game carousel
  const carousel = document.querySelector('#project-1-modal-carousel');
  if (carousel) {
    flkty = new Flickity(carousel, {
      cellAlign: 'center',
      contain: true,
      wrapAround: true
    });

    const video = carousel.querySelector('video');
    if (video) {
      video.addEventListener('loadedmetadata', () => {
        flkty.resize();
      });
    }
  }

  // Set up modal triggers for all cards
  const modalTriggers = document.querySelectorAll('.modal-trigger');
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const targetId = trigger.getAttribute('data-target');
      const modal = document.getElementById(targetId);
      if (modal) {
        modal.classList.add('is-active');

        // Delay resize until modal is visible
        setTimeout(() => {
          if (flkty) flkty.resize();
        }, 100);
      }
    });
  });

  // Close all modals when "delete" or footer button is clicked
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    const closeButtons = modal.querySelectorAll('.delete, .modal-card-foot .button');
    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.remove('is-active');
      });
    });
  });
});