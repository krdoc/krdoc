<template>
  <div class="flex h-screen overflow-hidden">
    <div>
      <div class="w-48">
        <SideBar class="fixed" />
      </div>
    </div>

    <!-- Main content area -->
    <div class="flex-grow flex flex-col">
      <div class="fixed w-full z-10">
        <ToolBar />
      </div>

      <div class="flex-grow overflow-auto pt-14 p-2">
        <slot />
      </div>
    </div>
  </div>
</template>
