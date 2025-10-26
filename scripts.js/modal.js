import { getSeasons } from "./utils.js";

/**
 * Open modal with podacst details
 * @param {Object} podcast
 */

export function openModal(podcast) {
  const modal = document.getElementById("podcast-modal");
  modal.style.display = "block";

  document.getElementById("modal-cover").src = podcast.image;
  document.getElementById("modal-title").textContent = podcast.title;
  document.getElementById("modal-description").textContent =
    podcast.description;
  document.getElementById("modal-updated-date").textContent = new Date(
    podcast.updated
  ).toLocaleDateString();

  const seasonsList = getSeasons(podcast.id);
  document.getElementById("modal-seasons-list").innerHTML = seasonsList
    .map((s) => `<li>${s.title} - ${s.episodes} episodes</li>`)
    .join("");
}

export function closeModal() {
    document.getElementById("podcast-modal").style.display = "none";
}

// Attach close event to modal close button
document.querySelector("#podcast-modal .close-btn").addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
    if (e.target.id === "podcast-modal") closeModal();
});