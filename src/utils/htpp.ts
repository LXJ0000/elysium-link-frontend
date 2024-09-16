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
        resolve(res.data as Data<T>)
      },
      //   success: ({ data, statusCode, header }) => {
      //     resolve({
      //       data,
      //       statusCode,
      //       header,
      //     })
      //   },
      fail: (error) => {},
    })
  })
}
