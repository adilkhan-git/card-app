const API_KEY = "QDKuWtL_lkMkqfGjDc_yi2cu1W0ohfOUgDTkDobN9mw";

export async function fetchImageData() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch image data");
  }
}
