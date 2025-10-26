import { podcasts } from "./data.js";
import { getSeasons } from "./utils.js";

/**
 * Render podcast cards
 * @param {HTMLElement} root
 * @param {Array<Object>} podcastList
 * @param {Function} openModalFn callback when clicking a card
 */

export function renderPodcasts(root, podcastList, openModalFn) {
  root.innerHTML = podcasts
    .map(
      (podcast) => `
        <div class="podcast-item" data-id="${podcast.id}">
      <img src="${podcast.image}" alt="${podcast.title}">
      <h3>${podcast.title}</h3>
      <div class="genre-tags">
        ${podcast.genres.map((id) => `<span>Genre ${id}</span>`).join("")}
      </div>
    </div>`
    )
    .join("");

  root.querySelectorAll(".podcast-item").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.dataset.id;
      const podcast = podcasts.find((p) => p.id === id);
      openModalFn(podcast);
    });
  });
}
