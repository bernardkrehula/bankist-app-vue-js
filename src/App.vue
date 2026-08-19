<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import BalanceHeader from "./components/BalanceHeader.vue";
</script>

<template>
  <AppHeader />
  <main class="app">
    <BalanceHeader :balance="25952.59" />
  </main>
</template>

<style scoped>
.app {
  max-width: 100rem;
  margin: 4rem auto;
  padding: 0 2rem;
}
</style>
