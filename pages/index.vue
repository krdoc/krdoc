<template>
  <!-- Outer container to handle scrolling -->
  <div class="overflow-auto w-full h-full">
    <!-- Inner container to apply scaling -->
    <div class="flex flex-col justify-center items-center space-y-2 pt-2">
      <div
        class="border-x border-gray-200 dark:border-gray-800 max-w-2xl w-full"
      >
        <p contenteditable="true" class="outline-none">This is a test</p>
      </div>
    </div>
  </div>
</template>
