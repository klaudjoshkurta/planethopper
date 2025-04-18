import { fetchPlanetDetails, fetchPlanets } from "@/services/planetsService";
import type { Planet } from "@/types/planet";
import { defineStore } from "pinia";

const planetImages = [
    'https://images.ferryhopper.com/locations/Skiathos.jpg',
    'https://images.ferryhopper.com/locations/Santorini.jpg',
    'https://images.ferryhopper.com/locations/Naxos.jpg',
    'https://images.ferryhopper.com/locations/Ios.JPG',
];

export const usePLanetsStore = defineStore('planets', {
    state: () => ({
        planets: [] as Planet[],
        currentPage: 1,
        hasMore: true,
        selectedPlanets: [] as Planet[],
    }),
    actions: {
        async loadPlanets() {
            try {
                const data = await fetchPlanets(this.currentPage);

                for (const planet of data.results) {

                    const details = await fetchPlanetDetails(planet.uid);
                    const randomImage = planetImages[Math.floor(Math.random() * planetImages.length)];

                    this.planets.push({
                        uid: planet.uid,
                        name: planet.name,
                        climate: details.climate,
                        terrain: details.terrain,
                        population: details.population,
                        image: randomImage,
                    })
                }

                this.currentPage++;
                this.hasMore = !!data.next;
            } catch (error) {
                console.error("Error loading planets:", error);
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
