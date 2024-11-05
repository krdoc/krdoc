<template>
  <div class="flex h-screen overflow-hidden">
    <div>
      <div class="w-60">
        <SideBar class="fixed" />
      </div>
    </div>

    <!-- Main content area -->
    <div class="flex-grow flex flex-col">
      <div class="fixed w-full z-10">
        <div
          class="w-full h-12 border-b border-gray-200 dark:border-gray-800 flex items-center px-4 bg-background"
        ></div>
      </div>

      <div class="flex-grow overflow-auto pt-12">
        <slot />
      </div>
    </div>
  </div>
</template>
