<template>
  <form class="form" @submit.prevent="onSubmit">
    <input
      type="text"
      class="input"
      placeholder="enter something"
      v-model="inputVal"
    />
    <input type="submit" class="add" value="Add Task" />
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits(["addTodo"]);
const inputVal = ref("");

const onSubmit = () => {
  emit("addTodo", inputVal.value);
  inputVal.value = "";
};
</script>

<style scoped>
.form {
  background-color: #eee;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  flex: 1;
}
.input:focus,
.add:focus {
  outline: none;
}
.add {
  border: none;
  background-color: #f44336;
  color: white;
  padding: 10px;
  border-radius: 6px;
  margin-left: 10px;
}
</style>
