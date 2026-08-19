<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    balance: number;
    currency?: string;
    locale?: string;
    date?: Date;
  }>(),
  { currency: "EUR", locale: "fr-FR", date: () => new Date() }
);

const formattedBalance = computed(() =>
  new Intl.NumberFormat(props.locale, {
    style: "currency",
    currency: props.currency,
  }).format(props.balance)
);

const formattedDate = computed(() =>
  new Intl.DateTimeFormat(props.locale, {
    dateStyle: "short",
    timeStyle: "short",
  }).format(props.date)
);
</script>

<template>
  <div class="balance">
    <div>
      <p class="balance__label">Current balance</p>
      <p class="balance__date">As of {{ formattedDate }}</p>
    </div>
    <p class="balance__value">{{ formattedBalance }}</p>
  </div>
</template>

<style scoped>
.balance {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.balance__label {
  font-size: 2.2rem;
  font-weight: 500;
}

.balance__date {
  font-size: 1.4rem;
  color: #888;
}

.balance__value {
  font-size: 4.5rem;
  font-weight: 400;
}
</style>
