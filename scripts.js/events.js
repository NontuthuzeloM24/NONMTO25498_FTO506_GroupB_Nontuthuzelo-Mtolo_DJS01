import { renderPodcasts } from "./dom.js";
import { openModal } from "./modal.js";
import { getPodcastsByGenre, sortPodcasts } from "./utils.js";
import { podcasts } from "./data.js";

function initializeApp() {
  const root = document.getElementById("podcast-list");
  const genreSelect = document.getElementById("genre-select");
  const sortSelect = document.getElementById("sort-select");

  const refreshPodcast = () => {
    let filtered = getPodcastByGenre(genreSelect.value);
    filtered = sortPodcasts(filtered, sortSelect.value);
    renderPodcasts(root, filtered, openModal);
  };

  renderPodcasts(root, podcasts, openModal);

  genreSelect.addEventListener("change", refreshPodcast);
  sortSelect.addEventListener("change", refreshPodcast);
}

document.addEventListener("DOMContentLoaded", initializeApp);
