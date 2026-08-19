<script setup lang="ts">
withDefaults(
  defineProps<{
    placeholder: string;
    type?: string;
  }>(),
  { type: "text" }
);

const model = defineModel<string>({ default: "" });
</script>

<template>
  <input class="input" :type="type" :placeholder="placeholder" v-model="model" />
</template>

<style scoped>
.input {
  width: 12rem;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 10rem;
  font-family: inherit;
  font-size: 1.6rem;
  text-align: center;
  color: inherit;
  background-color: #fff;
  transition: all 0.3s;
}

.input:focus {
  outline: none;
  background-color: #f3f3f3;
}

.input::placeholder {
  color: #bbb;
}
</style>
