<template>
  <NuxtImg
    src="/logo.svg"
    alt="Korean Regular Documents darkmode logo"
    class="dark:hidden"
    v-bind="$attrs"
  />
  <NuxtImg
    src="/logo-dark.svg"
    alt="Korean Regular Documents logo"
    class="hidden dark:block"
    v-bind="$attrs"
  />
</template>
