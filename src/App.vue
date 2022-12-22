<template>
    <div class="container">
     <TodoList />
    </div>
  <!-- <RouterView /> -->
</template>

<script setup lang="ts">
import TodoList from "./components/TodoList.vue"
</script>

<style scoped>
.container {
  width: 500px;
  margin: 20px auto;
}
</style>
