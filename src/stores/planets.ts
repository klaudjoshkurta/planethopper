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
