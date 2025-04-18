<template>
    <div class="trip-planner">
    <h2>Your Trip Plan</h2>
    <div v-if="selectedPlanets.length === 0" class="empty-message">
      No planets selected. Start planning your trip!
    </div>
    <ul class="selected-planets">
      <li v-for="planet in selectedPlanets" :key="planet.uid" class="selected-planet">
        <img :src="planet.image" :alt="planet.name" class="planet-image" />
        <div class="planet-details">
          <h3>{{ planet.name }}</h3>
          <p><strong>Climate:</strong> {{ planet.climate }}</p>
          <p><strong>Terrain:</strong> {{ planet.terrain }}</p>
        </div>
      </li>
    </ul>
    <button v-if="selectedPlanets.length > 0" @click="clearPlanets" class="clear-button">
      Clear Planets
    </button>
  </div>
</template>

<script setup lang="ts">
import { usePLanetsStore } from '@/stores/planets';

const planetsStore = usePLanetsStore();
const selectedPlanets = planetsStore.selectedPlanets;

const clearPlanets = () => {
    planetsStore.clearPlanets();
}
</script>
