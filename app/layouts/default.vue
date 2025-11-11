<script setup lang="ts">
defineOptions({ name: 'Layout' })
</script>

<template>
  <div
    class="layout min-h-screen from-blue-50 to-blue-100 via-white bg-gradient-to-br dark:from-gray-900 dark:to-blue-950 dark:via-gray-900"
  >
    <slot />
  </div>
</template>
