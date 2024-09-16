export default {
  methods: {
    friends(): Array<{
      id: number
      name: string
      tip: number
      imageUrl: string
      time: Date
      news: string
    }> {
      const friendList: Array<{
        id: number
        name: string
        tip: number
        imageUrl: string
        time: Date
        news: string
      }> = [
        {
          id: 1,
          name: '大海',
          tip: 1,
          imageUrl: 'avator1.jpg',
          time: new Date(),
          news: '你好吗我很好你好吗？',
        },
        {
          id: 2,
          name: '大海捞针',
          tip: 12,
          imageUrl: 'avator3.jpg',
          time: new Date(),
          news: '你好吗我很好你好吗你好吗我很好你好吗你好吗我很好你好吗？',
        },
        {
          id: 3,
          name: '天空',
          tip: 3,
          imageUrl: 'avator4.jpg',
          time: new Date(),
          news: '你好吗我很好你好吗？',
        },
        {
          id: 4,
          name: '大海',
          tip: 4,
          imageUrl: 'avator1.jpg',
          time: new Date(),
          news: '你好吗我很好你好吗？',
        },
        {
          id: 5,
          name: '大海捞针',
          tip: 1,
          imageUrl: 'avator3.jpg',
          time: new Date(),
          news: '你好吗我很好你好吗你好吗我很好你好吗你好吗我很好你好吗？',
        },
        {
          id: 6,
          name: '天空',
          tip: 1,
          imageUrl: 'avator4.jpg',
          time: new Date(),
          news: '你好吗我很好你好吗？',
        },
        {
          id: 7,
          name: '大海',
          tip: 1,
          imageUrl: 'avator1.jpg',
          time: new Date(),
          news: '你好吗我很好你好吗？',
        },
        {
          id: 8,
          name: '大海捞针',
          tip: 1,
          imageUrl: 'avator3.jpg',
          time: new Date(),
          news: '你好吗我很好你好吗你好吗我很好你好吗你好吗我很好你好吗？',
        },
        {
          id: 9,
          name: '天空',
          tip: 1,
          imageUrl: 'avator4.jpg',
          time: new Date(),
          news: '你好吗我很好你好吗？',
        },
      ]
      return friendList
    },
  },
}
