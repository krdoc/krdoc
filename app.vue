<template>
  <NuxtLayout class="text-zinc-950 dark:text-zinc-100">
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="css">
*::-webkit-scrollbar {
  height: 8px;
  width: 8px;
}
*::-webkit-scrollbar-track {
  border-radius: 0px;
  background-color: theme("colors.background");
}

*::-webkit-scrollbar-track:hover {
  background-color: theme("colors.background");
}

*::-webkit-scrollbar-thumb {
  border-radius: 0px;
  background-color: theme("colors.gray.100");
}

*::-webkit-scrollbar-thumb:hover {
  background-color: theme("colors.gray.300");
}

@media (prefers-color-scheme: dark) {
  *::-webkit-scrollbar-thumb {
    background-color: theme("colors.gray.800"); /* Dark mode thumb */
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: theme("colors.gray.600"); /* Dark mode hover thumb */
  }
}
</style>
