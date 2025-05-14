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

  document.addEventListener('DOMContentLoaded', () => {
    function closeModal(modal) {
      modal.classList.remove('is-active');
  
      // Pause and reset videos inside the modal
      const videos = modal.querySelectorAll('video');
      videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
      });
    }
  
// Close when clicking background or delete (X) or footer button
document.querySelectorAll('.modal').forEach(modal => {
  const background = modal.querySelector('.modal-background');
  const closeButtons = modal.querySelectorAll('.delete, .modal-card-foot .button');
  
  if (background) {
    background.addEventListener('click', () => closeModal(modal));
  }
  
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => closeModal(modal));
  });
});
  
// Close when pressing Escape key
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    document.querySelectorAll('.modal.is-active').forEach(modal => {
      closeModal(modal);
    });
   }
});
});
  


});
