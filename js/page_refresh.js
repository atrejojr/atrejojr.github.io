<script>
  let flkty; // make it global

  document.addEventListener('DOMContentLoaded', function () {
    flkty = new Flickity('#project-1-modal-carousel', {
      cellAlign: 'center',
      contain: true,
      wrapAround: true
    });

    const video = document.querySelector('#project-1-modal-carousel video');
    if (video) {
      video.addEventListener('loadedmetadata', function () {
        flkty.resize();
      });
    }
  });
</script>
