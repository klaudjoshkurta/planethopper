<template>
    <div class="h-screen overflow-hidden flex flex-col">

        <header class="bg-white px-4 py-3 lg:py-6">
            <h1 class="text-xl lg:text-3xl xl:text-5xl lg:text-center font-bold leading-6 lg:leading-[36px] xl:leading-[52px]">Planet Hopper</h1>
        </header>

        <!-- Main Content -->
        <main class="w-full max-w-[1512px] mx-auto grid grid-cols-12 gap-y-4 overflow-hidden flex-1">
            <!-- Planet List -->
            <div class="col-span-12 lg:col-span-6 xl:col-span-7 order-2 lg:order-1 overflow-auto px-4">
                <PlanetList />
            </div>
            <!-- Trip Planer -->
            <div class="col-span-12 lg:col-span-6 xl:col-span-5 order-1 lg:order-2 lg:px-4 bg-white">
                <TripPlanner />
            </div>
        </main>
    </div>

</template>

<script setup lang="ts">
import PlanetList from '@/components/PlanetList.vue';
import TripPlanner from '@/components/TripPlanner.vue';
</script>
