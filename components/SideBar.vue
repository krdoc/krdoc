<template>
  <div
    class="w-60 space-y-2 border-r border-gray-200 dark:border-gray-800 h-screen overflow-y-auto"
  >
    <div class="sticky top-0 z-10 bg-background p-2">
      <NuxtLink to="/">
        <div class="flex space-x-2 items-end">
          <div>
            <Logo class="h-8" />
          </div>
          <div>
            <p class="text-md">demo.krd</p>
          </div>
        </div>
      </NuxtLink>
    </div>

    <p class="text-sm pt-6 px-4 font-bold text-gray-700 dark:text-gray-300">
      파일
    </p>
    <div class="px-4">
      <UFormGroup label="서식 파일">
        <USelectMenu
          :options="kssFiles"
          v-model="kssFile"
          variant="outline"
          size="sm"
          color="white"
        />
      </UFormGroup>
    </div>

    <p class="text-sm pt-6 px-4 text-gray-700 dark:text-gray-300">
      <span class="font-bold"> 텍스트 서식 </span>
      ({{ KSS.name }})
    </p>
    <div class="px-4">
      <UButtonGroup size="sm" orientation="horizontal" class="mb-2">
        <UButton icon="i-ph-text-b" color="white" variant="solid" />
        <UButton icon="i-ph-text-italic" color="white" variant="solid" />
        <UButton icon="i-ph-text-underline" color="white" variant="solid" />
        <UButton icon="i-ph-text-strikethrough" color="white" variant="solid" />
      </UButtonGroup>

      <UAccordion
        default-open
        color="white"
        variant="outline"
        size="sm"
        multiple
        :items="KSS.format"
      >
        <template #item="{ item }">
          <div
            class="flex-col space-y-1 text-zinc-950 dark:text-zinc-100"
            :style="KSS.globalStyle"
          >
            <button
              v-for="style in item.styles"
              :key="style.id"
              class="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-1 rounded-md w-full"
              variant="link"
              color="gray"
              :style="item.localStyle"
            >
              <UIcon :name="style.icon" class="w-5 h-5" />
              <p :style="style.style" class="h-max">
                {{ style.label }}
              </p>
            </button>
          </div>
        </template>
      </UAccordion>
    </div>
  </div>
</template>

<script setup lang="ts">
const kssFiles = ["IEEE.kss", "MLA.kss", "APA.kss", "Chicago.kss"];
const kssFile = ref("IEEE.kss");

// Jseon loading will be added soon
const KSS = reactive({
  name: "IEEE",
  globalStyle: "font-family: 'Nanum Myeongjo', serif;",
  format: [
    {
      id: "header",
      label: "제목",
      icon: "i-ph-text-h",
      localStyle: "font-weight: bold;",
      styles: [
        {
          id: "h1",
          label: "제목 1",
          icon: "i-ph-text-h-one",
          style: "font-size: 2em; line-height: 1.2;",
          editable: {
            b: false,
            i: false,
            u: false,
            s: false,
          },
        },
        {
          id: "h2",
          label: "제목 2",
          icon: "i-ph-text-h-two",
          style: "font-size: 1.5rem; line-height: 1.2;",
        },
        {
          id: "h3",
          label: "제목 3",
          icon: "i-ph-text-h-three",
          style: "font-size: 1.25rem; line-height: 1.2;",
        },
      ],
    },
    {
      id: "body",
      label: "본문",
      icon: "i-ph-text-t",
      localStyle: "",
      styles: [
        {
          id: "p",
          label: "본문",
          icon: "i-ph-text-aa-light",
          style: "font-size: 1rem; line-height: 1.5;",
        },
      ],
    },
  ],
});

const selectedStyle = ref("header");
</script>
