const API_KEY = "24742243-f1ccb4b554382da08302fd92e";

function fetchGallery(value, page) {
  return fetch(
    `https://pixabay.com/api/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`We cant fins images by name ${value}`));
  });
}

const api = {
  fetchGallery,
};

export default api;
