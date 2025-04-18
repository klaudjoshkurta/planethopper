<template>
    <div>
    <div class="planet-list">
      <PlanetItem
        v-for="planet in planetsStore.planets"
        :key="planet.uid"
        :planet="planet"
        :class="['planet-item', { selected: isSelected(planet) }]"
        @click="selectPlanet(planet)"
      />
    </div>
    <button v-if="planetsStore.hasMore" @click="loadMorePlanets">Load More</button>
  </div>
</template>

<script setup lang="ts">
import { usePLanetsStore } from '@/stores/planets';
import { onMounted } from 'vue';
import PlanetItem from './PlanetItem.vue';

const planetsStore = usePLanetsStore();

onMounted(async() => {
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
