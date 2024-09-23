<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'

interface ChatItem {
  id: string
  avatar: string
  name: string
  lastMessage: string
  lastTime: string
  unreadCount: number
  isGroup: boolean
}

const chatList = ref()
const selectedChat = ref<string | null>(null)
const isSearchExpanded = ref(false)

const loadChatList = async () => {
  // 模拟API调用
  const mockData: ChatItem[] = [
    {
      id: '1',
      avatar: '../../static/images/avatar1.jpg',
      name: '张三',
      lastMessage: '今晚一起吃饭吗？',
      lastTime: '18:30',
      unreadCount: 2,
      isGroup: false,
    },
    {
      id: '2',
      avatar: '../../static/images/avatar1.jpg',
      name: '周末团建群',
      lastMessage: '李四: 大家有什么想法吗？',
      lastTime: '昨天',
      unreadCount: 5,
      isGroup: true,
    },
    {
      id: '3',
      avatar: '../../static/images/avatar1.jpg',
      name: '王五',
      lastMessage: '项目进展如何？',
      lastTime: '星期二',
      unreadCount: 0,
      isGroup: false,
    },
    {
      id: '4',
      avatar: '../../static/images/avatar1.jpg',
      name: '技术交流群',
      lastMessage: '赵六: 有人遇到这个问题吗？',
      lastTime: '星期一',
      unreadCount: 10,
      isGroup: true,
    },
    {
      id: '5',
      avatar: '../../static/images/avatar1.jpg',
      name: '妈妈',
      lastMessage: '记得按时吃饭',
      lastTime: '3天前',
      unreadCount: 1,
      isGroup: false,
    },
    // 添加更多模拟数据...
  ]
  chatList.value = mockData
}

const refreshList = async () => {
  await loadChatList()
  uni.stopPullDownRefresh()
}

const loadMore = async () => {
  // 模拟加载更多数据
  console.log('加载更多...')
}

const selectChat = (id: string) => {
  selectedChat.value = id
  // 这里可以添加导航到聊天详情页的逻辑
  uni.navigateTo({
    url: `/pages/chat/detail?id=${id}`,
  })
}

const toggleSearch = () => {
  isSearchExpanded.value = !isSearchExpanded.value
}

onMounted(loadChatList)
onPullDownRefresh(refreshList)
onReachBottom(loadMore)
</script>

<template>
  <view class="chat-list-container">
    <view class="top-bar">
      <image class="avatar" src="../../static/images/avatar1.jpg" mode="aspectFill" />
      <view class="search-box" :class="{ expanded: isSearchExpanded }" @tap="toggleSearch">
        <image src="../../static/images/avatar1.jpg" mode="aspectFit" class="search-icon" />
        <input v-if="isSearchExpanded" type="text" placeholder="搜索" />
      </view>
      <view class="icons">
        <image src="../../static/images/avatar1.jpg" mode="aspectFit" />
      </view>
    </view>

    <scroll-view scroll-y class="chat-list" @scrolltolower="loadMore">
      <view
        v-for="chat in chatList"
        :key="chat.id"
        class="chat-item"
        :class="{ active: selectedChat === chat.id }"
        @touchstart="selectedChat = chat.id"
        @touchend="selectedChat = null"
        @tap="selectChat(chat.id)"
      >
        <view class="avatar-container">
          <image class="chat-avatar" :src="chat.avatar" mode="aspectFill" />
          <view v-if="chat.unreadCount > 0" class="unread-count">
            {{ chat.unreadCount > 99 ? '99+' : chat.unreadCount }}
          </view>
        </view>
        <view class="chat-info">
          <view class="chat-header">
            <text class="chat-name">{{ chat.name }}</text>
            <text class="chat-time">{{ chat.lastTime }}</text>
          </view>
          <view class="chat-message">
            <text class="message-content">{{ chat.lastMessage }}</text>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style scoped>
.chat-list-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f7f7f7;
}

.top-bar {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ededed;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 5px;
}

.search-box {
  flex: 0 1 40px;
  height: 40px;
  margin-left: 10px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  overflow: hidden;
}

.search-box.expanded {
  flex: 1;
  margin-right: 10px;
}

.search-icon {
  width: 20px;
  height: 20px;
  margin: 0 10px;
}

.search-box input {
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  font-size: 14px;
}

.icons {
  margin-left: auto;
}

.icons image {
  width: 24px;
  height: 24px;
}

.chat-list {
  flex: 1;
  overflow-y: auto;
}

.chat-item {
  display: flex;
  padding: 12px;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s ease;
}

.chat-item.active {
  background-color: #d9d9d9;
}

.avatar-container {
  position: relative;
  margin-right: 12px;
}

.chat-avatar {
  width: 50px;
  height: 50px;
  border-radius: 4px;
}

.unread-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #f43530;
  color: #fff;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;
}

.chat-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.chat-name {
  font-size: 16px;
  font-weight: 500;
  color: #000;
}

.chat-time {
  font-size: 12px;
  color: #b2b2b2;
}

.chat-message {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.message-content {
  font-size: 14px;
  color: #b2b2b2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
</style>
