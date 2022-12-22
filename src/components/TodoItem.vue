<template>
 <div class="task">
      <div class="task-input">
        <span class="checkbox-parent">
          <input type="checkbox" class="checkbox" v-model="isCheck" />
        </span>
        <span :class="`list-value ${isCheck ? 'active' : ''}`">{{ props.listValue?.item }}</span>
        <font-awesome-icon
          class="del"
          icon="fa-solid fa-trash"
          @click="removeValue(props.listValue)"
        />
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
    listValue: Object,
})
// console.log(props.listValue.item)
const isCheck = ref(false);
const emit = defineEmits(["removeTodo"]);
const removeValue = (s: any) => {
    emit("removeTodo", s.id);
    // console.log(s.id);
};
</script>