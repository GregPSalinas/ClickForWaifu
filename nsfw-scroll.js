let currentIndex = 0;
let loading = false; // Flag to prevent multiple loads

// Ensure the page is scrolled to the top on refresh
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

// Function to create a new panel dynamically
const createPanel = () => {
  const panel = document.createElement('div');
  panel.classList.add('panel');
  panel.setAttribute('data-loaded', 'false'); // Mark as not loaded
  panel.setAttribute('data-loading', 'false'); // Mark as not loading
  panel.innerHTML = `
    <h3><a href="#" target="_blank">Click for waifu</a></h3>
    <p class="artist"></p>
  `;
  return panel;
};

// Fetch a random image and set it as background with artist info
const loadRandomImage = (panel) => {
  // Check if the panel is already loaded or loading
  if (panel.getAttribute('data-loaded') === 'true' || panel.getAttribute('data-loading') === 'true') return;

  console.log('Loading image for panel'); // Debug log

  // Mark the panel as loading to prevent multiple requests
  panel.setAttribute('data-loading', 'true');

  fetch("https://api.waifu.im/search/?is_nsfw=true")
    .then((res) => res.json())
    .then((data) => {
      const imageUrl = data.images[0].url;
     
      // Set background image and artist info
      panel.style.backgroundImage = `url(${imageUrl})`;
      linkElement.href = artistSource;
      artistElement.textContent = `Source: ${artistSource}`;

      // Mark the panel as loaded and stop loading
      panel.setAttribute('data-loaded', 'true');
      panel.setAttribute('data-loading', 'false');
      console.log('Image loaded successfully');
    })
    .catch((err) => {
      console.log('Error loading image:', err);
      panel.setAttribute('data-loading', 'false'); // Reset loading state on error
    });
};

// Initialize intersection observer to lazy load panels
const initializeObserver = () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const panel = entry.target;
        loadRandomImage(panel); // Load image when the panel is in view
        observer.unobserve(panel); // Stop observing once loaded
      }
    });
  }, {
    rootMargin: '0px 0px 200px 0px', // Trigger loading a little before the panel comes into view
    threshold: 0.1
  });

  // Observe all existing panels
  document.querySelectorAll('.panel').forEach(panel => {
    observer.observe(panel);
  });
};

// Load more panels when scrolling near the end
const loadMorePanels = () => {
  if (loading) return; // Prevent multiple loads
  loading = true;

  // Add 5 more panels
  for (let i = 0; i < 5; i++) {
    const newPanel = createPanel();
    document.querySelector('.container').appendChild(newPanel);
  }

  // Delay the observer initialization to ensure the panels are added to the DOM
  setTimeout(() => {
    initializeObserver(); // Re-initialize observer to watch the new panels
    loading = false;
  }, 500);
};

// Initialize app with a few panels
for (let i = 0; i < 5; i++) {
  const panel = createPanel();
  document.querySelector('.container').appendChild(panel);
}
initializeObserver();

// Debounce for infinite scrolling behavior
let debounceTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading) {
      loadMorePanels(); // Load more panels when near the bottom of the page
    }
  }, 200); // Wait 200ms before triggering the load
});
