/**
 * A Pinia store for managing planet-related data and actions.
 *
 * This store provides state management for a list of planets,
 * pagination, loading state, and selected planets. It also
 * includes actions for loading planets from an API, selecting
 * planets, and clearing the selected planets.
 *
 * @store usePlanetsStore
 *
 * @state
 * @property {Planet[]} planets - The list of planets currently loaded.
 * @property {number} currentPage - The current page of planets being fetched.
 * @property {boolean} hasMore - Indicates if there are more planets to load.
 * @property {Planet[]} selectedPlanets - The list of planets selected by the user (up to 5).
 * @property {boolean} loading - Indicates if the planets are currently being loaded.
 *
 * @actions
 * @method loadPlanets - Fetches a list of planets from the API and updates the store state.
 * @method selectPlanet - Adds a planet to the selected planets list if it is not already selected and the limit is not exceeded.
 * @method clearPlanets - Clears the list of selected planets.
 *
 * @example
 * // Load planets
 * await usePlanetsStore.loadPlanets();
 *
 * // Select a planet
 * usePlanetsStore.selectPlanet(planet);
 *
 * // Clear selected planets
 * usePlanetsStore.clearPlanets();
 */

import { defineStore } from "pinia";
import { fetchPlanets } from "@/services/planetsService";

import type { Planet } from "@/types/planet";

const planetImages = [
    'https://images.ferryhopper.com/locations/Skiathos.jpg',
    'https://images.ferryhopper.com/locations/Santorini.jpg',
    'https://images.ferryhopper.com/locations/Naxos.jpg',
    'https://images.ferryhopper.com/locations/Ios.JPG',
];

export const usePlanetsStore = defineStore('planets', {
    state: () => ({
        planets: [] as Planet[],
        currentPage: 1,
        hasMore: true,
        selectedPlanets: [] as Planet[],
        loading: false,
    }),
    actions: {
        async loadPlanets() {
            this.loading = true;
            try {
                const data = await fetchPlanets(this.currentPage);

                for (const planet of data.results) {

                    const planetItem = {} as Planet;
                    const randomImage = planetImages[Math.floor(Math.random() * planetImages.length)];

                    planetItem.image = randomImage;
                    planetItem.name = planet.name;
                    planetItem.rotation_period = planet.rotation_period;
                    planetItem.orbital_period = planet.orbital_period
                    planetItem.diameter = planet.diameter
                    planetItem.climate = planet.climate
                    planetItem.gravity = planet.gravity
                    planetItem.terrain = planet.terrain
                    planetItem.surface_water = planet.surface_water
                    planetItem.population = planet.population
                    planetItem.residents = planet.residents
                    planetItem.films = planet.films
                    planetItem.created = planet.created
                    planetItem.edited = planet.edited
                    planetItem.url = planet.url

                    this.planets.push(planetItem)
                }

                this.currentPage++;
                this.hasMore = !!data.next;
            } catch (error) {
                console.error("Error loading planets:", error);
            } finally {
                this.loading = false;
            }
        },
        selectPlanet(planet: Planet) {
            if (this.selectedPlanets.length < 5 && !this.selectedPlanets.includes(planet)) {
                this.selectedPlanets.push(planet);
            }
        },
        clearPlanets() {
            this.selectedPlanets = [];
        }
    }
})
