// // get all gallery items and calculate their width
// const galleryItems = document.querySelectorAll('.gallery-item');
// const galleryWidth = document.querySelector('.gallery').offsetWidth;
// const itemWidth = galleryItems[0].offsetWidth;

// // set initial position and direction
// let position = 0;
// let direction = -1;

// // clone the first item and append it to the end of the list
// const firstItemClone = galleryItems[0].cloneNode(true);
// document.querySelector('.gallery').appendChild(firstItemClone);

// // create the scroll animation
// function animateGallery() {
//   // calculate the next position
//   position += direction * itemWidth;

//   // check if the gallery has reached the left or right end
//   if (position < -itemWidth) {
//     // move the first item to the end of the list
//     const firstItem = document.querySelector('.gallery-item');
//     document.querySelector('.gallery').appendChild(firstItem);
//     position += itemWidth;
//   } else if (position > galleryWidth) {
//     // move the last item to the beginning of the list
//     const lastItem = document.querySelectorAll('.gallery-item')[galleryItems.length];
//     document.querySelector('.gallery').insertBefore(lastItem, galleryItems[0]);
//     position -= itemWidth;
//   }

//   // set the new position
//   document.querySelector('.gallery').style.transform = `translateX(${position}px)`;

//   // animate the gallery again
//   setTimeout(animateGallery, 100);
// }

// // start the animation
// animateGallery();


// // Get all gallery elements on the page
// const galleries = document.querySelectorAll('.gallery');

// // Loop through each gallery
// galleries.forEach(gallery => {

//   // Get all gallery items in the current gallery
//   const galleryItems = gallery.querySelectorAll('.gallery-item');

//   // Calculate the total width of the gallery by adding up the width of all gallery items
//   const galleryWidth = galleryItems.length * galleryItems[0].offsetWidth;

//   // Set the width of the gallery to be the total width of all gallery items
//   gallery.style.width = galleryWidth + 'px';

//   // Clone all gallery items and append them to the end of the gallery
//   for (let i = 0; i < galleryItems.length; i++) {
//     gallery.appendChild(galleryItems[i].cloneNode(true));
//   }

//   // Set the initial position of the gallery to be at the first gallery item
//   let currentPosition = 0;
//   gallery.style.left = currentPosition + 'px';

//   // Create a function to animate the gallery
//   function animateGallery() {

//     // Move the gallery to the left by one pixel
//     currentPosition--;

//     // If the gallery has scrolled past the end of the cloned items, reset its position to the beginning
//     if (currentPosition <= -galleryWidth) {
//       currentPosition = 0;
//     }

//     // Set the new position of the gallery
//     gallery.style.left = currentPosition + 'px';
//   }

//   // Call the animateGallery function every 10 milliseconds to create a scrolling effect
//   setInterval(animateGallery, 10);
// });




// const gallery = document.querySelector('.gallery');
// const items = document.querySelectorAll('.gallery-item');
// const itemCount = items.length;
// const margin = 20;
// let currentPosition = 0;
// let galleryWidth;

// // Set gallery width based on item width and margin
// function setGalleryWidth() {
//   const itemWidth = items[0].offsetWidth;
//   galleryWidth = (itemWidth + margin) * itemCount;
//   gallery.style.width = `${galleryWidth}px`;
// }

// // Animate gallery to show next set of items
// function animateGallery() {
//   currentPosition -= galleryWidth / itemCount;
//   if (currentPosition < -galleryWidth + galleryWidth / itemCount) {
//     currentPosition = 0;
//   }
//   gallery.style.transform = `translateX(${currentPosition}px)`;
//   requestAnimationFrame(animateGallery);
// }

// // Pause gallery animation on hover
// gallery.addEventListener('mouseenter', () => {
//   cancelAnimationFrame(animateGallery);
// });

// // Resume gallery animation on mouse leave
// gallery.addEventListener('mouseleave', () => {
//   requestAnimationFrame(animateGallery);
// });

// // Set gallery width initially and on window resize
// setGalleryWidth();
// window.addEventListener('resize', setGalleryWidth);



// const gallery = document.querySelector('.gallery');
// const items = document.querySelectorAll('.gallery-item');
// const itemCount = items.length;
// const margin = 20;
// let currentPosition = 0;
// let galleryWidth;

// // Set gallery width based on item width and margin
// function setGalleryWidth() {
//   const itemWidth = items[0].offsetWidth;
//   galleryWidth = (itemWidth + margin) * itemCount;
//   gallery.style.width = `${galleryWidth}px`;
// }

// // Animate gallery to show next set of items
// function animateGallery() {
//   currentPosition -= galleryWidth / itemCount;
//   if (currentPosition < -galleryWidth + galleryWidth / itemCount) {
//     currentPosition = 0;
//   }
//   gallery.style.transform = `translateX(${currentPosition}px)`;
//   requestAnimationFrame(animateGallery);
// }

// // Pause gallery animation on hover
// gallery.addEventListener('mouseenter', () => {
//   cancelAnimationFrame(animateGallery);
// });

// // Resume gallery animation on mouse leave
// gallery.addEventListener('mouseleave', () => {
//   requestAnimationFrame(animateGallery);
// });

// // Set gallery width and start animation
// setGalleryWidth();
// animateGallery();
