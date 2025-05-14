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

  // Close modals on "delete" or footer button click
  document.querySelectorAll('.modal').forEach(modal => {
    modal.querySelectorAll('.delete, .modal-card-foot .button').forEach(button => {
      button.addEventListener('click', () => {
        modal.classList.remove('is-active');
      });
    });
  });
});


// document.addEventListener('DOMContentLoaded', function () {
//  const carousels = {};

//   // Initialize Flickity project modals
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