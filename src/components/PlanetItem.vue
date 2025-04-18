<template>
    <div class="border flex items-center gap-4 p-2 hover:border-primary hover:ring-1 ring-primary cursor-pointer transition-all">
        <img v-if="planet.image" :src="planet.image" :alt="planet.name" class="size-[100px] aspect-square object-cover" />
        <div class="space-y-1">
            <h3 class="text-lg font-semibold">{{ planet.name }}</h3>
            <p class="text-muted-foreground text-sm">Climate: {{ planet.climate }}</p>
            <p class="text-muted-foreground text-sm">Terrain: {{ planet.terrain }}</p>
            <p class="text-muted-foreground text-sm">Population: {{ formattedPopulation }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Planet } from '@/types/planet';

const props = defineProps<{ planet: Planet }>();

const formattedPopulation = props.planet.population ? Number(props.planet.population).toLocaleString('en-US') : 'unknown';
</script>
