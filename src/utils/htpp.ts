import { useMemberStore } from '@/stores'

const baseURL = ''

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    // 拼接 URL
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 超时时间
    options.timeout = 10000
    options.header = {
      'source-client': 'miniapp',
      // 'content-type': 'application/json',
      ...options.header,
    }
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token // 避免 profile = undefined
    if (token) {
      options.header['Authorization'] = `Bearer ${token}`
    }
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
  message: string
  code: number
  result: T
}

export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({
            url: '/pages/login/login',
          })
          reject(res)
        } else {
          uni.showToast({
            title: (res.data as Data<T>).message || '请求错误',
            icon: 'none',
          })
          reject(res)
        }
      },
      fail: (error) => {
        uni.showToast({
          title: '网络错误，换个网络试试吧',
          icon: 'none',
        })
        reject(error)
      },
    })
  })
}
