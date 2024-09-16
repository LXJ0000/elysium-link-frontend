import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 User Store
export const useUserStore = defineStore(
  'user',
  () => {
    // 用户信息
    const profile = ref<any>()

    // 保存用户信息，登录时使用
    const setProfile = (val: any) => {
      profile.value = val
    }

    // 清理用户信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined
    }

    return {
      profile,
      setProfile,
      clearProfile,
    }
  },
  {
    // 小程序端配置
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          return uni.setStorageSync(key, value)
        },
      },
    },
  },
)
