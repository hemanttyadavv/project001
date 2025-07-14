// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('input[type="text"]');

  // Add event listener for Enter key press
  searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      const query = searchInput.value.trim();

      if (query) {
        alert(`Searching for restaurants near: "${query}"`);
        // Optionally, redirect or fetch search results here
        // window.location.href = `/search?q=${encodeURIComponent(query)}`;
      } else {
        alert('Please enter a location or restaurant name to search.');
      }
    }
  });
});
