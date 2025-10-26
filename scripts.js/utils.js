import { podcasts, genres, seasons } from "./data.js";

/**
 * Get podcast filtered by genre
 * @param {string} genreTitle - The title of the genre to filter by
 * @returns {Array<Object>}
 */

export function getPodcastsByGenre(genreTitle = "all-genre") {
    if (genreTitle === "all-genre") return podcasts;
    const genre = genres.find(
        (g) => g.title.toLowerCase() === genreTitle.toLowerCase()
    );
    return podcasts.filter((p) => genre?.shows?.includes(p.id));
}

/**
 * @param {Array<Object>} podcastList
 * @param {"recently-updated"|"newest"} sortOption
 * @returns {Array<Object>}
 */

export function sortPodcasts(podcastList, sortOption) {
    switch (sortOption) {
        case "recently-updated":
            return [...podcastList].sort(
                (a, b) => new Date(b.updated) - new Date(a.updated)
            );
        case "newest":
            return [...podcastList].sort(
                (a, b) => a.title.localeCompare(b.title)
            );
        default:
            return podcastList;
    }
}

/**
 * Get seasons for podcast
 * @param {string} podcastId
 * @returns {Array<Object>}
 */

export function getSeasons(podcastId) {
    return seasons.find((s) => s.id === podcastId)?.seasonDetails || [];
}