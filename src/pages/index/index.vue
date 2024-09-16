<!-- <script setup lang="ts">
import { ref } from 'vue'
import datas from '@/utils/data'
const friendList = ref(datas.methods.friends())
</script>

<template>
  <view class="content">
    <view class="top-bar">
      <view class="top-bar-l">
        <image src="@/static/images/avator3.jpg" mode=""></image>
      </view>
      <view class="top-bar-c">
        <image src="@/static/logo.png" mode=""></image>
      </view>
      <view class="top-bar-r">
        <view class="search">
          <image src="@/static/images/search.png" mode=""></image>
        </view>
        <view class="add">
          <image src="@/static/images/add_group.png" mode=""></image>
        </view>
      </view>
    </view>
    <view class="main">
      <view
        class="friend-list"
        v-for="(item, index) in friendList"
        :key="item.id"
        :class="'friend-list-' + index"
      >
        <view class="friend-list-l">
          <view class="tip">
            {{ item.tip }}
          </view>
          <image :src="item.imageUrl" mode=""></image>
        </view>
        <view class="friend-list-r">
          <view class="top">
            <view class="name">
              {{ item.name }}
            </view>
            <view class="time"> 13:13 </view>
          </view>
          <view class="news">
            {{ item.news }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.content {
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  padding-top: var(--status-bar-height);
  padding-bottom: $uni-spacing-col-lg;
  .top-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 88rpx;
    padding-top: var(--status-bar-height);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);

    .top-bar-l {
      float: left;
      padding-left: $uni-spacing-col-base;
      margin-top: 10rpx;
      image {
        width: 68rpx;
        height: 68rpx;
        border-radius: 16rpx;
      }
    }
    .top-bar-c {
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
      image {
        width: 68rpx;
        height: 68rpx;
        padding-top: 10rpx;
      }
    }
    .top-bar-r {
      float: right;
      padding-right: 14rpx;
      .add {
        display: inline-block;
        width: 88rpx;
        height: 88rpx;
      }
      .search {
        display: inline-block;
        width: 88rpx;
        height: 88rpx;
      }
      image {
        width: 52rpx;
        height: 52rpx;
        padding: 18rpx 0 0 18rpx;
      }
    }
  }
  .main {
    padding: 88rpx $uni-spacing-col-base 0;
    // border: 1px solid red;
  }
  .friend-list {
    position: relative;
    height: 98rpx;
    width: 100%;
    padding: 16rpx 0;
    &:active {
      background-color: #f3f3f3;
    }
    .friend-list-l {
      float: left;
      image {
        width: 96rpx;
        height: 96rpx;
        background: #ffe431;
        border-radius: 24rpx;
      }
      .tip {
        position: absolute;
        z-index: 1000;
        top: 2rpx;
        left: 70rpx;
        min-width: 36rpx;
        height: 36rpx;
        line-height: 36rpx;
        font-family: PingFangSC-Regular;
        font-size: 24rpx;
        color: #ffffff;
        font-weight: 400;
        border-radius: 50%;
        background-color: #ff5d5b;
        text-align: center;
      }
    }
    .friend-list-r {
      padding-left: 128rpx;
      .top {
        height: 50rpx;
        .name {
          float: left;
          font-size: 36rpx;
          color: #272832;
          font-weight: 400;
          line-height: 50rpx;
        }
        .time {
          float: right;
          font-size: 24rpx;
          color: rgba(39, 40, 50, 0.4);
          font-weight: 400;
          line-height: 50rpx;
        }
      }
      .news {
        font-size: 28rpx;
        color: rgba(39, 40, 50, 0.6);
        font-weight: 400;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}
</style> -->
<template>
  <view>home</view>
</template>
