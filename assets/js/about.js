window.addEventListener('DOMContentLoaded', () => {
  const savedSelection = localStorage.getItem('selectedButtons');
  if (savedSelection) {
    const selectedButtons = JSON.parse(savedSelection);

    // Use the selectedButtons data as needed in about.js
  }
});