<template>
  <AddTodo @add-todo="addTodo" />
  <div class="task">
    <TodoItem
      v-for="item in listVal"
      :key="item.id"
      :listValue="item"
      @remove-todo="removeTodo"
    />
  </div>
  <div class="delete-all" @click="removeAllValue">Delete all</div>
</template>

<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
import AddTodo from "./AddTodo.vue";
import { ref } from "vue";
const listVal = ref<any>([]);
const addTodo = (inputVal: string) => {
  //   listVal.value.push(inputVal);
  listVal.value.push({
    id: Date.now() + 180,
    item: inputVal,
  });
  localStorage.setItem("todoItem", JSON.stringify(listVal.value));
};
console.log(listVal.value);
const removeTodo = (id: string) => {
  listVal.value = listVal.value.filter((e: any) => e.id !== id);
};
const removeAllValue = () => {
  listVal.value = [];
};

</script>

<style>
.checkbox-parent {
  position: relative;
  width: 20px;
  height: 20px;
}
.checkbox {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.list-value.active {
  text-decoration: line-through;
}

.task {
  margin-top: 15px;
}
.task .task-input {
  background-color: #eafdfc;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  gap: 10px;
  align-items: center;
  transition: 0.3s;
  border: 1px solid #ccc;
}
.task .task-input:not(:last-child) {
  margin-bottom: 15px;
}
.task .task-input.done {
  opacity: 0.5;
  position: relative;
}
.task-input.done::after {
  position: absolute;
  content: "";
}
.task .task-input .del {
  background-color: red;
  color: white;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;
}
.delete-all {
  margin: auto;
  padding: 10px;
  text-align: center;
  font-size: 15px;
  color: white;
  background-color: #f44336;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
