let flkty;

document.addEventListener('DOMContentLoaded', function () {
  const carousels = {};

  // Initialize all carousels for project modals
  ['project-1-modal-carousel', 'project-2-modal-carousel', 'project-3-modal-carousel'].forEach(id => {
    const carouselElement = document.getElementById(id);
    if (carouselElement) {
      const flktyInstance = new Flickity(carouselElement, {
        cellAlign: 'center',
        contain: true,
        wrapAround: true
      });

      carousels[id] = flktyInstance;

      // Attach resize listener if a video exists
      const video = carouselElement.querySelector('video');
      if (video) {
        video.addEventListener('loadedmetadata', () => {
          flktyInstance.resize();
        });
      }
    }
  });

  // Set up modal triggers for all cards
  const modalTriggers = document.querySelectorAll('.modal-trigger');
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const targetId = trigger.getAttribute('data-target');
      const modal = document.getElementById(targetId);
      if (modal) {
        modal.classList.add('is-active');

        // Resize the corresponding Flickity carousel after opening
        const carouselId = `${targetId}-carousel`;
        setTimeout(() => {
          if (carousels[carouselId]) {
            carousels[carouselId].resize();
          }
        }, 100);
      }
    });
  });

  // Close modals when "delete" or modal footer button is clicked
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

// document.addEventListener('DOMContentLoaded', function () {
//   // Initialize Flickity only for the Snake Game carousel
//   const carousel = document.querySelector('#project-1-modal-carousel');
//   if (carousel) {
//     flkty = new Flickity(carousel, {
//       cellAlign: 'center',
//       contain: true,
//       wrapAround: true
//     });

//     const video = carousel.querySelector('video');
//     if (video) {
//       video.addEventListener('loadedmetadata', () => {
//         flkty.resize();
//       });
//     }
//   }

//   // Set up modal triggers for all cards
//   const modalTriggers = document.querySelectorAll('.modal-trigger');
//   modalTriggers.forEach(trigger => {
//     trigger.addEventListener('click', () => {
//       const targetId = trigger.getAttribute('data-target');
//       const modal = document.getElementById(targetId);
//       if (modal) {
//         modal.classList.add('is-active');

//         // Delay resize until modal is visible
//         setTimeout(() => {
//           if (flkty) flkty.resize();
//         }, 100);
//       }
//     });
//   });

//   // Close all modals when "delete" or footer button is clicked
//   const modals = document.querySelectorAll('.modal');
//   modals.forEach(modal => {
//     const closeButtons = modal.querySelectorAll('.delete, .modal-card-foot .button');
//     closeButtons.forEach(btn => {
//       btn.addEventListener('click', () => {
//         modal.classList.remove('is-active');
//       });
//     });
//   });
// });