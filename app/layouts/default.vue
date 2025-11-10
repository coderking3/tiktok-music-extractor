<script setup lang="ts">
defineOptions({ name: 'Layout' })
</script>

<template>
  <div
    class="layout min-h-screen from-pink-50 to-blue-50 via-purple-50 bg-gradient-to-br dark:from-gray-900 dark:to-gray-900 dark:via-purple-900/20"
  >
    <slot />
  </div>
</template>

<style scoped>
/* .layout{

 } */
</style>
