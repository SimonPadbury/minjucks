// Theme toggler – light / dark / auto (system preference)
// Uses color-scheme + localStorage + accessible toggle buttons

document.addEventListener('DOMContentLoaded', () => {
  // Select elements once DOM is ready
  const html = document.documentElement;
  const lightSwitch  = document.querySelector('#lightSwitch');
  const darkSwitch   = document.querySelector('#darkSwitch');
  const autoSwitch   = document.querySelector('#autoSwitch');

  // If buttons don't exist → exit early (graceful fail)
  if (!lightSwitch || !darkSwitch || !autoSwitch) {
    console.warn('Theme toggle buttons not found in DOM');
    return;
  }

  // Helper to update button states
  function updateButtons(mode) {
    lightSwitch.setAttribute('aria-pressed', mode === 'light'  ? 'true' : 'false');
    darkSwitch.setAttribute('aria-pressed',  mode === 'dark'   ? 'true' : 'false');
    autoSwitch.setAttribute('aria-pressed',  mode === 'auto'   ? 'true' : 'false');
  }

  // Core switch functions
  function setMode(mode) {
    if (mode === 'auto') {
      html.style.colorScheme = 'light dark';
      localStorage.removeItem('mode');
      updateButtons('auto');
    } else if (mode === 'light') {
      html.style.colorScheme = 'light';
      localStorage.setItem('mode', 'light');
      updateButtons('light');
    } else if (mode === 'dark') {
      html.style.colorScheme = 'dark';
      localStorage.setItem('mode', 'dark');
      updateButtons('dark');
    }
  }

  // Load saved preference (or default to auto/system)
  const savedMode = localStorage.getItem('mode');

  if (savedMode === 'light') {
    setMode('light');
  } else if (savedMode === 'dark') {
    setMode('dark');
  } else {
    // Default: respect system preference (auto)
    setMode('auto');
  }

  // Add click handlers
  lightSwitch.addEventListener('click', () => setMode('light'));
  darkSwitch.addEventListener('click',  () => setMode('dark'));
  autoSwitch.addEventListener('click',  () => setMode('auto'));
});