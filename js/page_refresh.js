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

    // Ensure Flickity resizes when video loads
    const video = carouselElement.querySelector('video');
    if (video) {
      video.addEventListener('loadedmetadata', function () {
        flkty.resize();
      });
    }
  }

  // Optional: Hook for when the modal opens
  const openBtn = document.getElementById('open-project-1');
  const modal = document.getElementById('project-1-modal');

  if (openBtn && modal) {
    openBtn.addEventListener('click', function () {
      modal.classList.add('is-active'); // Adjust for your modal system

      // Trigger Flickity layout fix after modal is visible
      setTimeout(() => {
        if (flkty) flkty.resize();
      }, 300); // Adjust delay to match modal animation duration
    });
  }
});
