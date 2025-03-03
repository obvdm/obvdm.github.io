// Array of images corresponding to each section
const images = [
  'images/image1.jpeg',
  'images/image2.jpeg',
  'images/image3.jpeg',
  'images/image4.jpeg',
  'images/image5.jpeg',
];

// IntersectionObserver options
const options = {
  root: null, // viewport as the root
  threshold: 0.5, // trigger when 50% of the section is visible
};

// Function to handle the intersection of the sections
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add 'active' class to the section when it comes into view
      entry.target.classList.add('active');

      // Get the ID of the current section and use it to determine the corresponding image
      const sectionId = entry.target.id.replace('box', '') - 1; // Subtract 1 to match array index

      // Set the background image for the section
      entry.target.style.backgroundImage = `url(${images[sectionId]})`;

      // Stop observing after the first intersection (optional)
      observer.unobserve(entry.target);
    } else {
      // Remove 'active' class when the section is no longer in view
      entry.target.classList.remove('active');
    }
  });
}

// Create the IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, options);

// Target all sections for observation
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});
