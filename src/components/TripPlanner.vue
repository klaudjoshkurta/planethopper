<template>
    <div class="bg-primary/20 py-3 space-y-2 lg:sticky lg:top-[84px] xl:top-[100px]">

        <h2 class="text-base xl:text-xl font-semibold text-center">
            Your planetary route
        </h2>

        <div v-if="selectedPlanets.length === 0" class="text-center text-sm xl:text-base text-muted-foreground">
            You have not selected any planets
        </div>

        <ul v-else class="space-y-1">
            <li v-for="planet in selectedPlanets" :key="planet.uid" class="lg:px-8">
                <div class="bg-white max-w-1/2 lg:max-w-1/1 mx-auto px-3 py-1">
                    <h3>{{ planet.name }}</h3>
                </div>
            </li>
        </ul>

        <div v-if="selectedPlanets.length > 0" class="text-center">
            <button @click="clearPlanets" class="hover:bg-destructive/10 text-destructive font-semibold rounded-full px-4 py-2 transition-all cursor-pointer inline-flex items-center gap-2">
                <X :size="20" class="relative top-[1px]" />
                Clear list
            </button>
        </div>

    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePlanetsStore } from '@/stores/planets';
import { X } from 'lucide-vue-next';

const planetsStore = usePlanetsStore();
const selectedPlanets = computed(() => planetsStore.selectedPlanets);

const clearPlanets = () => {
    planetsStore.clearPlanets();
}
</script>
