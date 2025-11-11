<!-- pages/index.vue -->
<script setup lang="ts">
const tiktokUrl = ref('https://v.douyin.com/fJbXnLXYKbc')
const loading = ref(false)
const result = ref<any>(null)
const error = ref('')

const toast = useToast()

const extractMusic = async () => {
  // console.log('111')
  // if (!tiktokUrl.value.trim()) {
  //   toast.add({
  //     title: '提示',
  //     description: '请输入 XXX 链接',
  //     color: 'error'
  //   })
  //   return
  // }

  loading.value = true
  error.value = ''
  result.value = null

  try {
    const data = await $fetch('/api/extract-music', {
      method: 'POST',
      body: { link: tiktokUrl.value }
    })
    console.log(`🚀 ~ data:`, data)

    result.value = data
    toast.add({
      title: '成功',
      description: '音乐提取成功!',
      color: 'success'
    })
  } catch (err: any) {
    error.value = err.data?.message || '提取失败,请检查链接是否正确'
    toast.add({
      title: '错误',
      description: error.value,
      color: 'error'
    })
  } finally {
    loading.value = false
  }
}

const clearResult = () => {
  result.value = null
  error.value = ''
  tiktokUrl.value = ''
}

useHead({
  title: 'XXX 音乐提取器',
  meta: [{ name: 'description', content: '快速提取 XXX 视频背景音乐' }]
})
</script>

<template>
  <UContainer class="px-4 py-12 lg:px-8 sm:px-6">
    <!-- Header -->
    <div class="mb-12 text-center">
      <div
        class="mb-6 rounded-2xl inline-flex h-20 w-20 shadow-blue-500/30 shadow-lg items-center justify-center from-blue-500 to-blue-700 bg-gradient-to-br"
      >
        <Icon name="i-heroicons-musical-note" class="text-white h-10 w-10" />
      </div>
      <h1
        class="text-4xl text-transparent font-bold mb-4 from-blue-600 to-blue-800 bg-gradient-to-r bg-clip-text sm:text-5xl"
      >
        XXX 背景音乐提取器
      </h1>
      <p class="text-lg text-gray-600 mx-auto max-w-2xl dark:text-gray-300">
        只需粘贴 XXX 视频链接, 即可快速提取背景音乐信息
      </p>
    </div>

    <!-- Input Card -->
    <UCard
      class="mx-auto mb-8 border border-blue-100 max-w-4xl shadow-xl dark:border-blue-900/50"
    >
      <div class="flex gap-3 items-start">
        <div class="flex-1">
          <UInput
            v-model="tiktokUrl"
            placeholder="粘贴 XXX 视频链接..."
            size="xl"
            icon="i-heroicons-link"
            :disabled="loading"
            class="w-full"
            @keyup.enter="extractMusic"
          />
        </div>
        <!-- :disabled="!tiktokUrl.trim()" -->
        <UButton
          size="xl"
          color="primary"
          :loading="loading"
          class="flex-shrink-0"
          @click="extractMusic"
        >
          <template #leading>
            <Icon name="i-heroicons-sparkles" />
          </template>
          {{ loading ? '解析中' : '解析' }}
        </UButton>
      </div>
    </UCard>

    <!-- Result Section -->
    <div
      v-if="result"
      class="animate-in slide-in-from-bottom-4 mx-auto max-w-4xl duration-500"
    >
      <UCard class="border border-blue-100 shadow-xl dark:border-blue-900/50">
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-xl text-gray-900 font-semibold flex gap-2 items-center dark:text-white"
            >
              <Icon
                name="i-heroicons-musical-note"
                class="text-blue-600 h-5 w-5"
              />
              解析结果
            </h3>
            <UButton
              size="sm"
              variant="soft"
              color="neutral"
              icon="i-heroicons-arrow-path"
              @click="clearResult"
            >
              重新解析
            </UButton>
          </div>
        </template>

        <div class="space-y-6">
          <!-- Music Info Grid -->
          <div v-if="result.music" class="gap-4 grid">
            <!-- Title -->
            <div
              class="p-4 border border-blue-100 rounded-lg flex gap-4 items-center from-blue-50 to-white bg-gradient-to-r dark:border-blue-900/30 dark:from-blue-950/30 dark:to-gray-800"
            >
              <div
                class="rounded-full flex flex-shrink-0 h-14 w-14 shadow-md items-center justify-center from-blue-500 to-blue-700 bg-gradient-to-br"
              >
                <Icon
                  name="i-heroicons-musical-note"
                  class="text-white h-7 w-7"
                />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm text-gray-500 mb-1 dark:text-gray-400">
                  音乐标题
                </p>
                <p
                  class="text-lg text-gray-900 font-semibold truncate dark:text-white"
                >
                  {{ result.music.title || '未知' }}
                </p>
              </div>
            </div>

            <!-- Author -->
            <div
              v-if="result.music.author"
              class="p-4 border border-blue-100 rounded-lg flex gap-4 items-center from-blue-50 to-white bg-gradient-to-r dark:border-blue-900/30 dark:from-blue-950/30 dark:to-gray-800"
            >
              <div
                class="rounded-full flex flex-shrink-0 h-14 w-14 shadow-md items-center justify-center from-blue-400 to-blue-600 bg-gradient-to-br"
              >
                <Icon name="i-heroicons-user" class="text-white h-7 w-7" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm text-gray-500 mb-1 dark:text-gray-400">
                  作者
                </p>
                <p
                  class="text-lg text-gray-900 font-semibold truncate dark:text-white"
                >
                  {{ result.music.author }}
                </p>
              </div>
            </div>

            <!-- Action Button -->
            <div v-if="result.music.url" class="pt-2">
              <UButton
                size="xl"
                color="primary"
                :to="result.music.url"
                target="_blank"
                external
                block
              >
                <template #leading>
                  <Icon name="i-heroicons-arrow-top-right-on-square" />
                </template>
                打开音乐链接
              </UButton>
            </div>
          </div>

          <!-- Raw Data (expandable) -->
          <UDivider />
          <UAccordion
            :items="[
              {
                label: '查看完整数据',
                icon: 'i-heroicons-code-bracket',
                defaultOpen: false
              }
            ]"
          >
            <template #default>
              <pre
                class="text-xs text-blue-400 mt-2 p-4 rounded-lg bg-gray-900 overflow-x-auto"
                >{{ JSON.stringify(result, null, 2) }}</pre
              >
            </template>
          </UAccordion>
        </div>
      </UCard>
    </div>

    <!-- Features -->
    <div class="mx-auto mt-12 gap-6 grid grid-cols-1 max-w-4xl sm:grid-cols-3">
      <div
        class="p-6 text-center border border-blue-100 rounded-xl bg-white shadow-md dark:border-blue-900/50 dark:bg-gray-800"
      >
        <div
          class="mb-3 rounded-full bg-blue-100 inline-flex h-12 w-12 items-center justify-center dark:bg-blue-900/30"
        >
          <Icon
            name="i-heroicons-bolt"
            class="text-blue-600 h-6 w-6 dark:text-blue-400"
          />
        </div>
        <h3 class="text-gray-900 font-semibold mb-2 dark:text-white">
          快速提取
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          秒级完成音乐信息提取
        </p>
      </div>

      <div
        class="p-6 text-center border border-blue-100 rounded-xl bg-white shadow-md dark:border-blue-900/50 dark:bg-gray-800"
      >
        <div
          class="mb-3 rounded-full bg-blue-100 inline-flex h-12 w-12 items-center justify-center dark:bg-blue-900/30"
        >
          <Icon
            name="i-heroicons-shield-check"
            class="text-blue-600 h-6 w-6 dark:text-blue-400"
          />
        </div>
        <h3 class="text-gray-900 font-semibold mb-2 dark:text-white">
          安全可靠
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          服务端处理,保护隐私
        </p>
      </div>

      <div
        class="p-6 text-center border border-blue-100 rounded-xl bg-white shadow-md dark:border-blue-900/50 dark:bg-gray-800"
      >
        <div
          class="mb-3 rounded-full bg-blue-100 inline-flex h-12 w-12 items-center justify-center dark:bg-blue-900/30"
        >
          <Icon
            name="i-heroicons-device-phone-mobile"
            class="text-blue-600 h-6 w-6 dark:text-blue-400"
          />
        </div>
        <h3 class="text-gray-900 font-semibold mb-2 dark:text-white">
          响应式设计
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">完美适配各种设备</p>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
@keyframes slide-in-from-bottom-4 {
  from {
    transform: translateY(1rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-in {
  animation: slide-in-from-bottom-4 0.5s ease-out;
}
</style>
