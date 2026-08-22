<script setup lang="ts">
import { ref } from "vue";
import BaseInput from "./ui/BaseInput.vue";
import axios from "axios";

const user = ref("");
const password = ref("");

const login = async () => {
  try {
    const { data } = await axios.get(
      "https://6a8757d470fbbd308f98f1ed.mockapi.io/Users",
    );
    console.log(user.value, password.value)
    data.map((u) => {
      console.log(u.password)
      if (u.name === user.value && u.password === Number(password.value))
  
    });
  } catch (error) {
    console.log(error);
  }
};

const logout = () => {};
</script>

<template>
  <header class="header">
    <p class="welcome">Welcome back, Sadeesha</p>
    <img src="/logo.png" alt="Bankist logo" class="logo" />
    <form class="login" @submit.prevent>
      <BaseInput v-model="user" placeholder="user" class="login__input" />
      <BaseInput
        v-model="password"
        placeholder="PIN"
        type="password"
        class="login__input"
      />
      <button
        @click="login"
        class="login__btn"
        type="submit"
        aria-label="Log in"
      >
        &rarr;
      </button>
    </form>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 9rem;
  padding: 0 2rem;
}

.welcome {
  flex: 1;
  font-size: 1.9rem;
  font-weight: 500;
}

.logo {
  height: 5.25rem;
}

.login {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  gap: 0.4rem;
}

.login__input:first-child {
  background-color: #f3f3f3;
}

.login__btn {
  border: none;
  background: none;
  font-family: inherit;
  font-size: 2.2rem;
  color: inherit;
  cursor: pointer;
  transition: all 0.3s;
}

.login__btn:hover,
.login__btn:focus {
  outline: none;
  color: #777;
}
</style>
