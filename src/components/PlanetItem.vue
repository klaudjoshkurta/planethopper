<template>
    <div>
        <img :src="planet.image" :alt="planet.name" style="width: 100px;" />
        <h3>{{ planet.name }}</h3>
        <p>Climate: {{ planet.climate }}</p>
        <p>Terrain: {{ planet.terrain }}</p>
        <p>Population: {{ formattedPopulation }}</p>
    </div>
</template>

<script setup lang="ts">
import type { Planet } from '@/types/planet';

const props = defineProps<{ planet: Planet }>();

const formattedPopulation = props.planet.population ? Number(props.planet.population).toLocaleString('en-US') : 'unknown';
</script>
