<template>
    <div class="py-4 lg:py-0 px-4 lg:px-0 space-y-4">
        <PlanetItem
            v-for="planet in planetsStore.planets"
            v-bind:key="planet.uid"
            v-bind:planet="planet"
            v-bind:class="['planet-item', { selected: isSelected(planet) }]"
            @click="selectPlanet(planet)">
        </PlanetItem>
        <div class="text-center">
            <button v-if="planetsStore.hasMore" @click="loadMorePlanets" class="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-2.5 transition-all cursor-pointer inline-flex items-center gap-2">
                Fetch planets
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePLanetsStore } from '@/stores/planets';
import { onMounted } from 'vue';
import PlanetItem from './PlanetItem.vue';

const planetsStore = usePLanetsStore();

onMounted(async () => {
    await loadMorePlanets();
});

const loadMorePlanets = async () => {
    try {
        await planetsStore.loadPlanets();
    } catch (error) {
        console.error('Error loading more planets:', error);
    }
};

const selectPlanet = (planet: Planet) => {
    planetsStore.selectPlanet(planet);
};

const isSelected = (planet: Planet) => {
    return planetsStore.selectedPlanets.includes(planet);
};
</script>
