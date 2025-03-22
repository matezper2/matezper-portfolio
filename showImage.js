document.addEventListener('DOMContentLoaded', function() {
  // Get all the images in the work gallery
  const images = document.querySelectorAll('.project-images .work__image');
  if (!images.length) return;
  
  // Initialize the current image index
  let currentImageIndex = 0;
  
  // Get the navigation buttons
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  if (!prevBtn || !nextBtn) return;
  
  // Function to show a specific image
  function showImage(index) {
      // Remove active class from all images
      images.forEach(img => img.classList.remove('active'));
      
      // Make sure the index is within bounds
      currentImageIndex = (index + images.length) % images.length;
      
      // Add active class to the current image
      images[currentImageIndex].classList.add('active');
  }
  
  // Event listeners for navigation buttons
  prevBtn.addEventListener('click', function() {
      showImage(currentImageIndex - 1);
  });
  
  nextBtn.addEventListener('click', function() {
      showImage(currentImageIndex + 1);
  });
  
  // Add keyboard navigation
  document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowLeft') {
          showImage(currentImageIndex - 1);
      } else if (event.key === 'ArrowRight') {
          showImage(currentImageIndex + 1);
      }
  });
  
  // Add touch swipe support for mobile devices
  let touchStartX = 0;
  let touchEndX = 0;
  
  const projectGallery = document.querySelector('.project-gallery');
  if (projectGallery) {
      projectGallery.addEventListener('touchstart', function(event) {
          touchStartX = event.changedTouches[0].screenX;
      }, false);
      
      projectGallery.addEventListener('touchend', function(event) {
          touchEndX = event.changedTouches[0].screenX;
          handleSwipe();
      }, false);
  }
  
  function handleSwipe() {
      // Determine swipe direction
      if (touchEndX < touchStartX) {
          // Swipe left - show next image
          showImage(currentImageIndex + 1);
      } else if (touchEndX > touchStartX) {
          // Swipe right - show previous image
          showImage(currentImageIndex - 1);
      }
  }
  
  showImage(0);
});