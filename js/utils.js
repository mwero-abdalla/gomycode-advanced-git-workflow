/**
 * Fetches an HTML file and returns its first <section> element.
 * @param {string} sectionName - File name without extension.
 * @returns {Promise<HTMLElement>} Parsed section element.
 */
const getFileContent = async (sectionName) => {
  if (!sectionName || typeof sectionName !== 'string') {
    throw new Error('A valid section name is required.');
  }

  const response = await fetch(`${sectionName}.html`);
  if (!response.ok) {
    throw new Error(
      `Failed to load ${sectionName}.html (${response.status} ${response.statusText})`
    );
  }

  const page = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(page, 'text/html');
  const section = doc.querySelector('section');

  if (!section) {
    throw new Error(`No <section> found in ${sectionName}.html`);
  }

  return section;
};