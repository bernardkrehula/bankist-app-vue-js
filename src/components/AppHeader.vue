<script setup lang="ts">
import { ref } from "vue";
import BaseInput from "./ui/BaseInput.vue";
import {
  requestLogin,
  LoginError,
  type LoggedInAccount,
} from "@/api/requestLogin.ts";

const user = ref("");
const password = ref("");
const errorMessage = ref("");
const isLoading = ref(false);
const account = ref<LoggedInAccount | null>(null);

const login = async () => {
  errorMessage.value = "";
  isLoading.value = true;

  try {
    account.value = await requestLogin({
      user: user.value,
      password: password.value,
    });
    user.value = "";
    password.value = "";
  } catch (error) {
    errorMessage.value =
      error instanceof LoginError ? error.message : "Something went wrong.";
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <header class="header">
    <p class="welcome">
      {{ account ? `Welcome back, ${account.name}` : "Log in to get started" }}
    </p>
    <img src="/logo.png" alt="Bankist logo" class="logo" />
    <form class="login" @submit.prevent="login">
      <BaseInput v-model="user" placeholder="user" class="login__input" />
      <BaseInput
        v-model="password"
        placeholder="PIN"
        type="password"
        class="login__input"
      />
      <button
        class="login__btn"
        type="submit"
        :disabled="isLoading"
        aria-label="Log in"
      >
        &rarr;
      </button>
    </form>
    <p v-if="errorMessage" class="login__error">{{ errorMessage }}</p>
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

.login__btn {
  border: none;
  background: none;
  font-family: inherit;
  font-size: 2.2rem;
  color: inherit;
  cursor: pointer;
  transition: all 0.3s;
}

.login__btn:disabled {
  opacity: 0.4;
  cursor: default;
}

.login__error {
  position: absolute;
  top: 7.5rem;
  right: 2rem;
  font-size: 1.3rem;
  color: #f5465d;
}
</style>
