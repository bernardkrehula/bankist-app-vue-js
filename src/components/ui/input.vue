<script>
export default {
  name: "input",
  data() {
    return {
      user: "Initial value",
      pin: 0,
    };
  },
};
</script>

<template>
  <input type="text" placeholder="user" v-model="user" />
</template>
