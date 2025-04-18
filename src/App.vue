<template>
    <div class="pt-12 lg:pt-[84px] xl:pt-[100px]">
        <!-- Header -->
        <header class="bg-white fixed top-0 inset-x-0 z-10 px-4 py-3 lg:py-6">
            <h1 class="text-xl lg:text-3xl xl:text-5xl lg:text-center font-bold leading-6 lg:leading-[36px] xl:leading-[52px]">Planet Hopper</h1>
        </header>

        <!-- Main Content -->
        <main class="xl:container xl:mx-auto lg:grid lg:grid-cols-12 lg:gap-x-12 lg:px-4 py-[1px]">

            <!-- Trip Planer -->
            <div class="bg-white sticky lg:static top-12 lg:col-span-4 lg:order-2">
                <TripPlanner />
            </div>

            <!-- Planet List -->
            <div class="lg:col-span-8 lg:order-1">
                <PlanetList />
            </div>

        </main>
    </div>
</template>

<script setup lang="ts">
import PlanetList from '@/components/PlanetList.vue';
import TripPlanner from '@/components/TripPlanner.vue';
</script>
