let flkty;

document.addEventListener('DOMContentLoaded', function () {
  const carousels = {};

  // Initialize all carousels inside modals
  document.querySelectorAll('.modal .carousel').forEach(carouselElement => {
    const id = carouselElement.id;
    const flktyInstance = new Flickity(carouselElement, {
      cellAlign: 'center',
      contain: true,
      wrapAround: true
    });

    carousels[id] = flktyInstance;

    // Handle video resize if present
    const video = carouselElement.querySelector('video');
    if (video) {
      video.addEventListener('loadedmetadata', () => {
        flktyInstance.resize();
      });
    }
  });

  // Set up modal triggers for all clickable thumbnails
  document.querySelectorAll('.modal-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-target');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('is-active');

        // Find carousel inside this modal
        const carousel = modal.querySelector('.carousel');
        if (carousel && carousels[carousel.id]) {
          setTimeout(() => {
            carousels[carousel.id].resize();
          }, 100);
        }
      }
    });
  });

  // // Close modals on "delete" or footer button click
  // document.querySelectorAll('.modal').forEach(modal => {
  //   modal.querySelectorAll('.delete, .modal-card-foot .button').forEach(button => {
  //     button.addEventListener('click', () => {
  //       modal.classList.remove('is-active');
  //     });
  //   });
  // });

// Close all modals when "delete" or footer button is clicked
const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
  const closeButtons = modal.querySelectorAll('.delete, .modal-card-foot .button');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.remove('is-active');

      // Pause all videos in this modal when it's closed
      const videos = modal.querySelectorAll('video');
      videos.forEach(video => {
        video.pause();
        video.currentTime = 0; // Optional: reset to beginning
      });
    });
  });
});


// Close via background click
const background = modal.querySelector('.modal-background');
if (background) {
  background.addEventListener('click', () => closeModal(modal));
}
});

// Close on Esc key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.is-active').forEach(modal => {
      closeModal(modal);
    });
  }
});
