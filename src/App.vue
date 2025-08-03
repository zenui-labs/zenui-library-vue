<template>
  <div id="app">
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component"/>
        <template #fallback>
          <div class="loading">Loading...</div>
        </template>
      </Suspense>
    </RouterView>
  </div>
</template>

<script setup>
import {RouterView} from 'vue-router'
</script>

<style scoped>
.loading {
  padding: 2rem;
  text-align: center;
  font-weight: bold;
}
</style>
